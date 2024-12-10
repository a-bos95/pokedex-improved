const BASE_URL = 'https://pokeapi.co/api/v2';

export async function getPokemonList(limit = 20, offset = 0) {
  const response = await fetch(
    `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
  );
  return response.json();
}

export async function getPokemonDetails(id: string | number) {
  const response = await fetch(`${BASE_URL}/pokemon/${id}`);
  return response.json();
}

export async function getPokemonEvolution(id: string | number) {
  const response = await fetch(`${BASE_URL}/evolution-chain/${id}`);
  return response.json();
} 