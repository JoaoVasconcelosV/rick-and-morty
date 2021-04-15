import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <div className='card' onClick={props.onClickID}>
      <div>
        <span>{props.name || 'Name' }</span>
        <img src={props.img} alt="Rick"/>
      </div>
      <span>More</span>
    </div>
  )
}

export default Card