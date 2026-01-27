import { useState, useEffect } from 'react'

import './App.css'
import { useImages } from './hooks/useImages.js'

function App() {

  const { pokemons, error } = useImages();
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [shuffledPokemons, setShuffledPokemons] = useState([]);
  const [clickedPokemons, setClickedPokemons] = useState([]);
  const [shakeId, setShakeId] = useState(null);
  const [scoreAnim, setScoreAnim] = useState(false);


  useEffect(() => {
    if (pokemons.length > 0) {
      setShuffledPokemons(shuffleCards(pokemons));
    }
  }, [pokemons]);

  if (error) {
    return <p>An Error was occurred!</p>
  }

  useEffect(() => {
    if (score >= 15) {
      alert("You Win!");
      setScore(0);
      setClickedPokemons([]);
      setShuffledPokemons(shuffleCards(pokemons));
    }
  }, [score, pokemons]);

  if (pokemons.length === 0) {
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

  function handleClick(pokemonId) {
    if (!clickedPokemons.includes(pokemonId)) {
      setClickedPokemons(prev => [...prev, pokemonId]);

      setScore(prevScore => {
        const newScore = prevScore + 1;
        setHighScore(prevHigh => Math.max(prevHigh, newScore));
        return newScore;
      });

      setScoreAnim(true);
      setTimeout(() => setScoreAnim(false), 300);
    } else {
      setShakeId(pokemonId);

      setTimeout(() => {
        setShakeId(null);
        setScore(0);
        setClickedPokemons([]);
        setShuffledPokemons(shuffleCards(shuffledPokemons));
      }, 400);

      return;
    }

    setShuffledPokemons(prev => shuffleCards(prev));
  }

  return (
    <>
      <h2>Memory Game</h2>
      <h3 className={scoreAnim ? 'score-pop' : ''}>
        Current Score: {score}
      </h3>

      <h3>High Score: {highScore}</h3>
      <div className="pokemon-grid">
        {shuffledPokemons.map(pokemon => (
          <div
            className={`pokemon-card ${shakeId === pokemon.id ? 'wrong' : 'shuffle'
              }`}
            key={pokemon.id}
            onClick={() => handleClick(pokemon.id)}
          >

            <img src={pokemon.image} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </>
  )
};

export default App;
