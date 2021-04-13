import React, { useState } from 'react'
import './modal.css'

const Modal = () => {
  const [visible, setVisible] = useState(true)

  const closeModal = () => {setVisible(false)}

  if(!visible)
    return null

  return (
    <div>
      Modal
      <button onClick={closeModal}>Fechar modal</button>
    </div>
  )
}

export default Modal