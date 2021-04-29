import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

import Logo from '../../assets/logo.svg'
import Github from '../../assets/github.svg'
import Linkedin from '../../assets/linkedin.svg'
import Instagram from '../../assets/instagram.svg'
import MenuIcon from '../../assets/menu.svg'

const Header = ({toggle}) => {
  return (
    <header className='header'>
      <div>
        <Link to="/"><img src={Logo} alt="logo"/></Link>
        <ul>
          <li><Link to="/">Characters</Link><div /></li>
          <li><Link to="/locations">Locations</Link><div /></li>          
          <li><Link to="/episodes">Episodes</Link><div /></li>
        </ul>
        <div>
          <a href='https://www.linkedin.com/in/joao-vasconcelos11/' target='_blank' rel="noreferrer"><img src={Linkedin} alt="Linkedin"/></a>
          <a href='https://www.instagram.com/joao_11vasconcelos' target='_blank' rel="noreferrer"><img src={Instagram} alt="Instagram"/></a>
          <a href='https://github.com/JoaoVasconcelosV' target='_blank' rel="noreferrer"><img src={Github} alt="Github"/></a>
        </div>
        <button onClick={toggle}>
          <img width="40" src={MenuIcon} alt="Icone menu"/>
        </button>
      </div>
    </header>
  )
}

export default Header