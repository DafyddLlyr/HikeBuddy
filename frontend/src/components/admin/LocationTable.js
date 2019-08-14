import React from 'react'
import LocationRow from './LocationRow'

const LocationTable = ({locations, deleteLocation}) => {

  const createLocations = () => {
    const allLocations = []
    if(locations.accommodations) {
      locations.services.forEach((service, index) => {
        allLocations.push(
          <LocationRow location={service} key={`service${index}`} deleteLocation={deleteLocation} type={"services"}/>)
      })
      locations.accommodations.forEach((accommodation, index) => {
        allLocations.push(
          <LocationRow location={accommodation} key={`accommodation${index}`} deleteLocation={deleteLocation} type={"accommodations"}/>)
      })
      locations.pointOfInterests.forEach((pointOfInterest, index) => {
        allLocations.push(
          <LocationRow location={pointOfInterest} key={`POI${index}`} deleteLocation={deleteLocation} type={"pointOfInterests"}/>)
      })
    }
    return allLocations;
  }

  return(
    <table id="admin-table">
    <tbody>
    <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Type</th>
    <th>Rating</th>
    <th>Admin</th>
    </tr>
    {createLocations()}
    </tbody>
    </table>
  )
}

export default LocationTable;
