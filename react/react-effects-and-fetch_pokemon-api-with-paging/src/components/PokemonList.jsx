import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);

  async function loadPokemon() {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${page}`
      );
      const data = await response.json();
      setPokemon(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadPokemon();
  }, [page]);

  return (
    <main>
      <button
        type="button"
        onClick={() => setPage((page) => (page > 0 ? page - 1 : 0))}
        disabled={page === 0}
      >
        Previous Page
      </button>
      <button onClick={() => setPage((page) => page + 1)} type="button">
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
