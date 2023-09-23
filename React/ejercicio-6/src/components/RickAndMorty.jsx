import React, { useEffect, useState } from 'react';
import { fetchCharacters } from './RickAndMortyService';
 // Ajusta la ruta si es necesario

export const RickAndMorty = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
   fetchCharacters().then(data => {
      setCharacters(data);
    });
  }, []);

  return (
    <>
      <h1>Lista de los primeros 20 personajes</h1>
      <ol>
        {characters.map(character => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} /> {character.name}
          </li>
        ))}
      </ol>
    </>
  );
};
