import React from 'react'
import './layout.css'

import { Header } from '../index'

const Layout = (props) => {  
  
  return (
    <div className='layout'>         
      <Header />
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