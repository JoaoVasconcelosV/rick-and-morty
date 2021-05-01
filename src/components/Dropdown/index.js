import { Link } from 'react-router-dom'

import Github from '../../assets/githubWhite.svg'
import Linkedin from '../../assets/linkedinWhite.svg'
import Instagram from '../../assets/instagramWhite.svg'

import './style.css'

const Dropdown = ({isOpen}) => {
  return(
    <div className={isOpen ? 'dropdown' : 'none'}>
      <Link to="/">Characters</Link>
      <hr/>
      <Link to="/locations">Locations</Link>
      <hr/>
      <Link to="/episodes">Episodes</Link>
      <hr/>
      <div>
        <a href="https://www.linkedin.com/in/joao-vasconcelos11/" target='_blank' rel="noreferrer">
          <img width="30" src={Linkedin} alt="Linkedin"/>
        </a>
        <a href="https://www.instagram.com/joao_11vasconcelos" target='_blank' rel="noreferrer">
          <img width="30" src={Instagram} alt="Instagram"/>
        </a>
        <a href="https://github.com/JoaoVasconcelosV" target='_blank' rel="noreferrer">
          <img width="30" src={Github} alt="Github"/>
        </a>
      </div>
    </div>
  )
}

export default Dropdown