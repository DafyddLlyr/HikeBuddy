import React, {Component} from 'react';
import './AdminContainer.css'
import LocationTable from '../components/admin/LocationTable'
import Request from '../helpers/request';
import Modal from '../components/general/Modal'

class AdminContainer extends Component{
  constructor(props){
    super(props)
    this.state = {
      accommodations: [],
      services: [],
      pointOfInterests: [],
      showModal: false,
      modalType: null
    }
    this.fetchLocations = this.fetchLocations.bind(this)
    this.findLocationById = this.findLocationById.bind(this)
    this.deleteLocation = this.deleteLocation.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.handleLocationPost = this.handleLocationPost.bind(this)
  }

  componentDidMount() {
    this.fetchLocations()
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
      newState.accommodations = data[0]
      newState.services = data[1]
      newState.pointOfInterests = data[2]
      this.setState(newState);
    })
  }

  findLocationById(id){
    const location = this.state.locations.find((location) => {
      return location.id = parseInt(id)
    })
    return location;
  }

  deleteLocation(id, type) {
    let request = new Request()
    let url = `/api/${type}/${id}`
    let newState = Object.assign({}, this.state)
    let locationToBeDeleted = newState[`${type}`].filter(item => item.id === id)
    let index = newState[type].indexOf(locationToBeDeleted)
    newState[`${type}`].splice(index, 1)
    this.setState(newState)
    request.delete(url)
  }

  showModal() {
    if(this.state.showModal) {
      return(
        <Modal
        handleLocationPost={this.handleLocationPost}
        type={this.state.modalType}
        toggleModal={this.toggleModal}/>
      )
    }
  }

  toggleModal(type) {
    let newState = Object.assign({}, this.state)
    newState.showModal = !this.state.showModal
    newState.modalType = type
    this.setState(newState)
  }

  handleLocationPost(location, type){
    const url = `/api/${type}`
    const request = new Request();
    request.post(url, location)
    .then(res => res.json())
    .then(newLocation => {
        let newState = Object.assign({}, this.state)
        newState[`${type}`].push(newLocation)
        this.setState(newState)
    })
  }


  render(){
    return(
      <div id="admin-container">
      <div id="admin-header">
      <h1>Admin Page</h1></div>


      <div id="button-holder">
      <button onClick={() => this.toggleModal("accommodations")}>Add Accommodation</button>
      <button onClick={() => this.toggleModal("services")}>Add Service</button>
      <button onClick={() => this.toggleModal("pointOfInterests")}>Add Point of Interest</button>
      </div>

      <LocationTable locations={this.state} deleteLocation={this.deleteLocation}/>
      {this.showModal()}

      </div>
    )
  }

}


export default AdminContainer;
