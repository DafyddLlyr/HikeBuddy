import React from 'react';
import StarRating from '../general/StarRating'
import {Popup} from 'react-leaflet';
import './LocationPopup.css'

const LocationPopup = ({location, saveFavourite, user}) => {

  const handleSaveLocation = (location) => {
    saveFavourite(location);
  }

  const locationCheck = () => {
    if(user) {
      let names = user.favourites.map(favourite => favourite.name)
      return names.includes(location.name)
    }
  }

  const displayButton = () => {
    const userHasFavourite = locationCheck()
    if(user && !userHasFavourite) {
    return <button onClick={() => handleSaveLocation(location)} value={location}>Add To Favourites</button>
}
  }





  return(
    <Popup>
    <div id='location-popup'>
      <img src={location.pictureURL} className="popup-image"/>

      <h1>{location.name}</h1>
      <StarRating rating={location.rating}/>
      <h2>{location.description}</h2>
    {displayButton()}
    </div>
    </Popup>
  )
}

export default LocationPopup;
