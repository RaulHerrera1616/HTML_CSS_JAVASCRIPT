import React, { useEffect, useState } from 'react'

export const RickAndMortyService = () => {

    const [characters, setcharacters] = useState([]);

    const fetchCharacters = async() => {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character')
            const data = await response.json()
            setcharacters(data.results)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchCharacters()
    }, [])

  return (
    <>
    <h1>Lista de los primeros 20 personajes</h1>
    <ul>
        {characters.map(character => <li key={character.id}>{character.name}</li>)}
    </ul>
    </>
  )
}
