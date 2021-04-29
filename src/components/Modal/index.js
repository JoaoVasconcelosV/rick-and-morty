import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

const portal = document.getElementById('modal')

const Modal = ({children, isOpen, clickClose}) => {
  if(!isOpen){
    return null
  }

  return ReactDOM.createPortal(
    <div className='modal-overlay'>
      <div className='modal'> 
        <button type='button' onClick={clickClose}>X</button>
        {children}  
      </div>
    </div>,
    portal
  )
}

export default Modal