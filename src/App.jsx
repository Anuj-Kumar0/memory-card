import { useState } from 'react'

import './App.css'
import { useImages } from './hooks/useImages.js'

function App() {
  
const {pokemons, error} = useImages();

if(error){
  return <p>An Error was occurred!</p>
}

if(pokemons.length === 0){
  return <p className="status-text">Loading Pokemons...</p>
}
return (
  <>
  <h2>Memory Game</h2>
  <div className="pokemon-grid">
    {pokemons.filter((_, index) => index % 4 === 0).map(pokemon => (
      <div className="pokemon-card" key={pokemon.id}>
        <img src={pokemon.image} alt={pokemon.name} />
        <p>{pokemon.name}</p>
      </div>
    ))}
  </div>
  </>
)
    };

export default App
