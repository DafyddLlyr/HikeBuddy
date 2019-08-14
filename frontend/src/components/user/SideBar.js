import React from 'react';
import UserProfile from './UserProfile'
import Routes from './Routes'
import Favourites from './Favourites'
import RouteCreator from './RouteCreator'
import './SideBar.css'


const SideBar = ({view, setView, user, locations, createNewRoute, newRoute, currentCoords, setStart, setEnd, trail, setRouteGeoJson, removeUserFavourites, updateUserRoutes, setNewRoute, deleteRoute, updateRouteCompletion, resetMarkers, resetRouteCreation}) => {


  const getView = () => {
    if(view.profile) {
      return(
        <UserProfile
          user={user}
          locations={locations}/>
    )}

    if(view.routes) {
      return(
        <Routes
          routes={user.routes}
          deleteRoute={deleteRoute}
          updateRouteCompletion={updateRouteCompletion}/>
    )}
    if(view.favourites) {
      return(
        <Favourites
        favourites={user.favourites}
        removeUserFavourites={removeUserFavourites}/>
    )}
    if(view.newRoute) {
      return(
        <RouteCreator
        newRoute={newRoute}
        currentCoords={currentCoords}
        setStart={setStart}
        setEnd={setEnd}
        trail={trail}
        setRouteGeoJson={setRouteGeoJson}
        createNewRoute={createNewRoute}
        resetMarkers={resetMarkers}
        resetRouteCreation={resetRouteCreation}/>
    )}
  }

  const handleSetView = (event) => {
    setView(event.target.value)
  }

  const createRoute = (event) => {
    setNewRoute()
    setView(event.target.value)
  }

  const setViewBackgroundColor = (selectedView) => {
    return view[`${selectedView}`] ? "green" : "limegreen"
  }

  const sidebarButton = (selectedView) => {
    return {
      width: "auto",
      height: "6vh",
      backgroundColor: setViewBackgroundColor(selectedView),
      border: "none",
      color: "white",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block"
    }
  }


  return(
    <div id="side-bar">
      <div id="header">
      <h1>HikeBuddy</h1>
      </div>
      <div id="sidebar-nav">
        <button style={sidebarButton('profile')} onClick={handleSetView} value="profile">
        <i class="fas fa-hiking"></i> Profile</button>
        <button style={sidebarButton('routes')} onClick={handleSetView} value="routes">
        <i class="fas fa-route"></i> Routes</button>
        <button style={sidebarButton('newRoute')} onClick={createRoute} value="newRoute">
        <i class="fas fa-plus-circle"></i> New Route</button>
        <button style={sidebarButton('favourites')} onClick={handleSetView} value="favourites">
        <i class="fas fa-heart"></i> Favourites</button>
      </div>
      {getView()}
    </div>
  )

}

export default SideBar;
