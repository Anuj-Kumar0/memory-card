import { useState, useEffect } from 'react'

import './App.css'
import { useImages } from './hooks/useImages.js'

function App() {
  
  const { pokemons, error } = useImages();
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0); 
  const [shuffledPokemons, setShuffledPokemons] = useState([]);
  const [clickedPokemons, setClickedPokemons] = useState([]); 

useEffect(() => {
  if (pokemons.length > 0) {
    setShuffledPokemons(shuffleCards(pokemons));
  }
}, [pokemons]);

if(error){
  return <p>An Error was occurred!</p>
}

if(pokemons.length === 0){
  return <p className="status-text">Loading Pokemons...</p>
}

function shuffleCards(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); 
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  console.log(shuffledArray);
  return shuffledArray; 

}

function handleClick(pokemonId){
  if(!clickedPokemons.includes(pokemonId)){
    setClickedPokemons(prev => [...prev, pokemonId]);
    setScore(prevScore => {
      const newScore = prevScore + 1;
      setHighScore(prevHigh => Math.max(prevHigh, newScore));
      return newScore;
    });
  } else {
    setScore(0);
    setClickedPokemons([]);
  }
  
  setShuffledPokemons((prevPokemons) => shuffleCards(prevPokemons));
}
return (
  <>
  <h2>Memory Game</h2>
  <h3>Current Score: {score}</h3>
  <h3>High Score: {highScore}</h3>
  <div className="pokemon-grid">
    {shuffledPokemons.map(pokemon => (
      <div className="pokemon-card" key={pokemon.id} onClick={() => handleClick(pokemon.id)}>
        <img src={pokemon.image} alt={pokemon.name} />
        <p>{pokemon.name}</p>
      </div>
    ))}
  </div>
  </>
)
    };

export default App;
