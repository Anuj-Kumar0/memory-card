import { useState, useEffect } from "react";

const api = "https://pokeapi.co/api/v2/pokemon?limit=48";

export function useImages() {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await fetch(api);
        const data = await response.json();
        console.log(data);

        const pokemonDetails = await Promise.all(
          data.results.map((pokemon) =>
            fetch(pokemon.url).then((res) => res.json())
          )
        );

        const pokemonData = pokemonDetails.map((pokemon) => ({
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.other["official-artwork"].front_default,
        }));

        setPokemons(pokemonData);
      } catch (error) {
        console.log("Error:", error);
        setError(error);
      }
    }
    fetchPokemons();
  }, []);

  return { pokemons, error };
}
