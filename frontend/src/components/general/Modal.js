
import React from 'react'
import LocationForm from '../admin/LocationForm'
import './Modal.css'

const Modal = (props) => {
  return(
    <div id="modal">
      <div id="modal-box">
      <LocationForm
        handleLocationPost={props.handleLocationPost}
        toggleModal={props.toggleModal}
        type={props.type}/>
      </div>
    </div>
  )
}

export default Modal;
