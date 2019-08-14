import React from 'react'
import StarRating from '../general/StarRating'

const LocationRow = ({location, deleteLocation, type}) => {

const handleDelete = (event) => {
  deleteLocation(event.target.value, type)
}

  return (
    <tr>
      <td>{ location.name }</td>
      <td>{ location.description }</td>
      <td>{ location.type }</td>
      <td><StarRating rating={ location.rating } /></td>
      <td><button onClick={handleDelete} value={location.id}>Delete</button></td>
    </tr>
  )
}

export default LocationRow;
