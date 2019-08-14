import React, { Component } from 'react';
import { Map, TileLayer, Marker, CircleMarker, GeoJSON, ZoomControl   } from 'react-leaflet';
import Request from '../../helpers/request'
import './MapBox.css'
import './SideBar.css'
import SideBar from './SideBar'
import LocationPopup from './LocationPopup'


class MapBox extends Component {

  constructor(props){
    super(props)
    this.state = {
      settings: {
        lat: 57.00,
        lng: -6.00,
        zoom: 7
      },
      trail: null,
      locations: {},
      trailPoints: null,
      routeMarkers: {
        start: null,
        end: null,
        geoJson: null
      }
    }
    this.setRouteGeoJson = this.setRouteGeoJson.bind(this)
    this.resetMarkers = this.resetMarkers.bind(this)
  }

  fetchTrail() {
    const url = "https://raw.githubusercontent.com/DafyddLlyr/geoJSON_test/master/map.geojson"
    fetch(url)
    .then(res => res.json())
    .then(trail => {
      let newState = Object.assign({}, this.state)
      newState.trail = trail
      this.setState(newState)
      this.fetchPoints()
    })
  }

  displayUserRoutes() {
    let userRoutes = []
    if(this.props.user) {
      for(let route of this.props.user.routes) {
        let data = { type: "LineString", coordinates: route.geoJsonData }
        userRoutes.push(
          <GeoJSON
          key={`routeOutline${route.id}`}
          data={data}
          weight={5}
          color={route.completed ? "green" : "red"}/>
        )
        userRoutes.push(
          <GeoJSON
          key={`routeInline${route.id}`}
          data={data}
          weight={1}
          color={"white"}/>
        )
      }
    }
    return userRoutes
  }

  showTrail() {
    if(this.state.trail) {
      return (
        [
        <GeoJSON
          key={"outline"}
          data={this.state.trail}
          weight={5}/>
          ,
        <GeoJSON
          key={"inline"}
          data={this.state.trail}
          weight={1}
          color={"white"}/>
      ]
      )
    }
  }

  resetMarkers() {
    let newState = Object.assign({}, this.state)
    newState.routeMarkers.start = null
    newState.routeMarkers.end = null
    this.setState(newState)
  }

  setRouteGeoJson(geoJson) {
    let newState = Object.assign({}, this.state)
    newState.routeMarkers.geoJson = geoJson
    this.setState(newState)
  }

  fetchLocations() {
    const request = new Request()
    const url = "api/locations/"

    let promise1 = request.get(url + "accommodation")
    let promise2 = request.get(url + "services")
    let promise3 = request.get(url + "pointsOfInterest")

    Promise.all([promise1, promise2, promise3])
    .then(data => {
      const newState = Object.assign({}, this.state);
      newState.locations.accommodation = data[0]
      newState.locations.services = data[1]
      newState.locations.pointsOfInterest = data[2]
      this.setState(newState);
    })
  }

  showLocations() {
    let layerGroup = []
    if(this.state.locations) {
      for(let type of Object.keys(this.state.locations)) {
        for(let location of this.state.locations[type]) {
          layerGroup.push(
            <Marker position={location.coordinates} key={location.id}>
            <LocationPopup location={location} saveFavourite={this.props.updateUser} user={this.props.user}></LocationPopup>
            </Marker>
          )
        }
      }
    }
    return layerGroup;
  }

  fetchPoints() {
    var geojson = {
      type: "FeatureCollection",
      features: []
    }
    if(this.state.trail) {
      for(let point of this.state.trail.features[0].geometry.coordinates) {
        geojson.features.push(
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: point
            }
          }
        )
      }
    }

    let newState = Object.assign({}, this.state)
    newState.trailPoints = geojson
    this.setState(newState)
  }

  // Display point on mouseover
  // handleMarkerMouseOver(event) {
  //   event.target.options.radius = 10;
  //   event.target.options.opacity = 1;
  //   console.log(event.target._leaflet_id)
  //   console.log(event)
  // }

  createPoints() {
    let layerGroup = []
    if(this.state.trailPoints) {
      for(let point of this.state.trailPoints.features) {
        let coords = [point.geometry.coordinates[1], point.geometry.coordinates[0]]
        layerGroup.push(
          <CircleMarker key={coords} center={coords} radius={7} fillOpacity={0} opacity={0} weight={0} onClick={(event) => this.handleMarkerClick(event, this.props.getCoords)} onMouseOver={this.handleMarkerMouseOver}/>
        )
      }
    }
    return layerGroup
    // Decide if layer group or geoJSON works better
    // return <GeoJSON data={this.state.trailPoints} />
  }

  handleMarkerClick(event, getCoords) {
    let coords = [event.latlng.lat, event.latlng.lng]
    if(this.props.newRoute.setStart) {
      getCoords(coords, "start")
      this.addMarker(<Marker position={coords} key={coords}/>, "start")
    } else {
      getCoords(coords, "end")
      this.addMarker(<Marker position={coords} key={coords}/>, "end")
    }
  }

  componentDidMount() {
    this.fetchTrail()
    this.fetchLocations()
  }

  addMarker(marker, position) {
    let newState = Object.assign({}, this.state)
    newState.routeMarkers[position] = marker
    this.setState(newState)
  }

  render() {

    const position = [this.state.settings.lat, this.state.settings.lng]

    return (
      <>
      <SideBar
      view={this.props.view}
      setView={this.props.setView}
      user={this.props.user}
      setNewRoute={this.props.setNewRoute}
      currentCoords={this.props.currentCoords}
      setStart={this.props.setStart}
      setEnd={this.props.setEnd}
      newRoute={this.props.newRoute}
      trail={this.state.trail}
      setRouteGeoJson={this.setRouteGeoJson}
      createNewRoute={this.props.createNewRoute}
      removeUserFavourites={this.props.removeUserFavourites}
      updateUserRoutes={this.props.updateUserRoutes}
      locations={this.state.locations}
      deleteRoute={this.props.deleteRoute}
      updateRouteCompletion={this.props.updateRouteCompletion}
      resetMarkers={this.resetMarkers}
      resetRouteCreation={this.props.resetRouteCreation}/>


      <Map center={position} zoom={this.state.settings.zoom} id="map-box" zoomControl={false}>
      <ZoomControl position={"topright"} />
      <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://maps.heigit.org/openmapsurfer/tiles/roads/webmercator/{z}/{x}/{y}.png"
      />
      {this.showTrail()}
      {this.showLocations()}
      {this.createPoints()}
      {this.state.routeMarkers.start}
      {this.state.routeMarkers.end}
      {this.state.routeMarkers.geoJson}

      {this.displayUserRoutes()}
      </Map>
      </>
    )
  }
}
export default MapBox;
