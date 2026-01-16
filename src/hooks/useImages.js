import { React, useEffect } from "react";

const api = "https://pokeapi.co/api/v2/pokemon?limit=10";

export function useImages() {
  const [pokemons, setPokemons] = useState(0);
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
        console.log(pokemonDetails);
        setPokemons(pokemonDetails);
      } catch (error) {
        console.log("Error:", error);
        setError(error);
      }
    }
    fetchPokemons();
  }, []);

  return { pokemons, error };
}
