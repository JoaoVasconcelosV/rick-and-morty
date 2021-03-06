import React, { useState, useEffect } from 'react'
import { UserContext } from '../../Contexts/UserContext';
import './style.css'

import { Header, Dropdown } from '../index'

const Layout = (props) => {  
  const[isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)    
  }

  if(!isOpen) {
    
  }

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', hideMenu)   
  },)
  
  return (
    <div className='layout'>         
      <Header toggle={toggle}/>
      <Dropdown isOpen={isOpen}/>
      <UserContext.Consumer>
        {({ user }) => (
          <h2>{user && user.name} have viewed {Object.keys(user.visualizedCharacters).length} characters</h2>           
        )}
      </UserContext.Consumer>
      <h1>Rick and Morty</h1>
      <div className='content'>
        <h1>{props.title}</h1>
        <div className='cards'>
          {props.children}
        </div>
      </div>            
    </div>
  )
}

export default Layout