import React, {Component} from 'react'
import './RouteCreator.css'
import './SideBar.css'
import RouteDisplay from './RouteDisplay'
import turfLength from '@turf/length'


class RouteCreator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      routeName: null
    }
    this.calculateRouteLength = this.calculateRouteLength.bind(this)
    this.prettyLength = this.prettyLength.bind(this)
    this.createNewLineString = this.createNewLineString.bind(this)
    this.handleSaveRoute = this.handleSaveRoute.bind(this)
    this.enterRouteName = this.enterRouteName.bind(this)
  }

  calculateRouteLength() {
    let newLineString = this.createNewLineString()
    let length = turfLength(newLineString)
    return length
  }

  prettyLength() {
    return (this.props.newRoute.start && this.props.newRoute.end) ? `${this.calculateRouteLength().toFixed(2)}km` : "0km"
  }

  createNewLineString() {
    let fullTrail = this.props.trail.features[0].geometry.coordinates
    let startPoint = [this.props.newRoute.start[1], this.props.newRoute.start[0]]
    let startIndex = fullTrail.findIndex(coord => {
      return (coord[0] === startPoint[0] && coord[1] === startPoint[1])
    })
    let endPoint = [this.props.newRoute.end[1], this.props.newRoute.end[0]]
    let endIndex = fullTrail.findIndex(coord => {
      return (coord[0] === endPoint[0] && coord[1] === endPoint[1])
    })
    let coordinates = fullTrail.slice(startIndex, endIndex)
    let geojson = {
      type: "LineString",
      coordinates: coordinates
    }
    return geojson
  }

  enterRouteName(event) {
    this.setState({routeName: event.target.value})
  }

  handleSaveRoute(event) {
    let length = this.calculateRouteLength()
    let geoJsonData = this.createNewLineString()
    let route = {
      name: this.state.routeName,
      completed: false,
      geoJsonData: geoJsonData.coordinates,
      length: length,
      user: "http://localhost:8080/api/users/1"
    }
    this.props.createNewRoute(route, event)
    this.props.resetMarkers()
    this.props.resetRouteCreation()
    this.setState({ routeName: null })
    event.target.reset();
  }

  render() {
    return(
      <div id="route-creator">

      <form onSubmit={this.handleSaveRoute}>
      <input type="text" placeholder="Enter Route Name" onInput={this.enterRouteName} required id="name-input"/>

      <div id="wrapper">

        <div className="form-section">
        <label htmlFor="start">Start</label>
        <input type="text" onClick={this.props.setStart} value={this.props.newRoute.start}></input>
        </div>

        <div className="form-section">
        <label htmlFor="end">End</label>
        <input type="text" onClick={this.props.setEnd} value={this.props.newRoute.end}></input>
        </div>

        <h2>Length: <span id="length-display">{this.prettyLength()}</span></h2>
        <button type="submit" id="save-button">Save Route</button>

      </div>

      </form>

      </div>
    )
  }

}


export default RouteCreator;
