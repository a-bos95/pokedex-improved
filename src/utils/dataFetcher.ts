import { config } from '../config/env';
import { Pokemon } from '../types/pokemon';
import { PokemonsListResponse } from '../types/pokemonsList';
import { PokemonTypesListResponse } from '../types/pokemonTypes';
export async function getPokemonList(
  limit: number = 20, 
  offset: number = 0, 
  withDetails: boolean = false
): Promise<PokemonsListResponse | Pokemon[]> {
  const response = await fetch(
    `${config.apiUrl}/pokemon?limit=${limit}&offset=${offset}`
  );
  const listData = await response.json();

  if (!withDetails) {
    return listData;
  }

  // If details requested, fetch them
  return Promise.all(
    listData.results.map((pokemon: { url: string }) => 
      fetch(pokemon.url).then(res => res.json())
    )
  );
}

export async function getPokemonEvolution(id: string | number) {
  const response = await fetch(`${config.apiUrl}/evolution-chain/${id}`);
  return response.json();
}

export async function fetchPokemonTypes(): Promise<string[]> {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/type');
    const data: PokemonTypesListResponse = await response.json();
    return data.results.map((type: { name: string }) => type.name);
  } catch (error) {
    console.error('Error fetching Pokemon types:', error);
    return [];
  }
} 