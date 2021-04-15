import React, { useState, useEffect } from 'react'
import { Layout, Card, Modal } from '../../components/index'

import './styles.css'

import api from '../../services/api'

const Home = () => {
  const [characters, setCharacters] = useState([])
  const [cardId, setCardId] = useState(null)  

  useEffect(() =>{
    async function handleSearchCharacters() {
      const response = await api.get('character', {});

      setCharacters(response.data.results)
    }

    handleSearchCharacters()
  },[])

  return (
    <div>
      <Layout title='Characters'>
        {characters.map(character => (
          <Card 
            key={character.id} 
            name={character.name} 
            img={character.image} 
            onClickID={() => 
              setCardId(character.id)
            }
          />
        ))}      
      </Layout>
      <Modal isOpen={Boolean(cardId)} clickClose={() => setCardId(null)}>   
        <div className='modal-content'>
          <img src={characters[cardId-1] && characters[cardId-1].image} alt=" character"/>
          <div className='content-modal'>
            <p className='titles'>
              Name: <span style={{color: 'white'}}>{characters[cardId-1] && characters[cardId-1].name}</span>
            </p>
            <p className='titles'>
              Status: <span style={{color: 'white'}}>{characters[cardId-1] && characters[cardId-1].status}</span>
            </p>    
            <p className='titles'>
              Species: <span style={{color: 'white'}}>{characters[cardId-1] && characters[cardId-1].species}</span>
            </p>
            <p className='titles'>
              Gender: <span style={{color: 'white'}}>{characters[cardId-1] && characters[cardId-1].gender}</span>
            </p>
            <p className='titles'>
              Origin: <span style={{color: 'white'}}>{characters[cardId-1] && characters[cardId-1].origin.name}</span>
            </p>
          </div>
        </div>       
      </Modal>
    </div>
  )
}

export default Home