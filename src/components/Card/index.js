import React from 'react'
import './style.css'

const Card = (props) => {
  return (
    <div className='card' onClick={props.onClickID}>
      <div>
        <span>{props.name || 'Name' }</span>
        <img src={props.img} alt="Rick"/>
      </div>
      <span>Click me</span>
    </div>
  )
}
//TESTE

export default Card