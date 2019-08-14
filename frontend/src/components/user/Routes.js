import React from 'react';
import './SideBar.css'

const Routes = ({routes, deleteRoute, updateRouteCompletion}) => {

  const handleDelete = (route) => {
    deleteRoute(route)
  }

  const toggleCompleted = (route, event) => {
    updateRouteCompletion(route)
  }

  const createCheckbox = (route) => {
    return(
      <input
        type="checkbox"
        checked={route.completed}
        onChange={() => toggleCompleted(route) }/>
    )
  }

  const getRoutes = routes.map((route, index) => {
    return (
      <tr key={index}>
        <td>{ route.name }</td>
        <td>{ route.length.toFixed(2) }km</td>
        <td>{ createCheckbox(route) }</td>
        <td><button onClick={() => handleDelete(route)}>Delete</button></td>
      </tr>
    )
  })

  return(
    <div id="routes">
      <table className="sidebar-table">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Distance</th>
          <th>Completed</th>
          <th>Admin</th>
        </tr>
      { getRoutes }
      </tbody>
      </table>
    </div>
  )
}

export default Routes;
