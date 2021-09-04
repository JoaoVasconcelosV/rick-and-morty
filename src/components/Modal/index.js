import React, { useEffect, useContext } from 'react'
import ReactDOM from 'react-dom'
import { UserContext } from '../../Contexts/UserContext'
import './style.css'

const portal = document.getElementById('modal')

const Modal = ({character, children, isOpen, clickClose}) => {
  const { setVisualizedCharacters } = useContext(UserContext);

  useEffect(() => {
    setVisualizedCharacters(character)
  }, [character, setVisualizedCharacters]);

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