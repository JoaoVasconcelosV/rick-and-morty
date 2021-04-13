import React, { useState, useEffect } from 'react'
import { Layout, Card } from '../../components/index'

import api from '../../services/api'

const Home = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() =>{
    async function handleSearchCharacters() {
      const response = await api.get('character', {});

      setCharacters(response.data.results)
    }

    handleSearchCharacters()
  },[])

  return (
    <Layout title='Characters'>
      {characters.map(character => (
        <Card key={character.id} name={character.name} img={character.image}/>
      ))}      
    </Layout>    
  )
}

export default Home