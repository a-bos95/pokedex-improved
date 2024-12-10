import Container from './components/Container';
import SearchBar from './components/SearchBar';
import SortDropdown from './components/SortDropdown';
import RangeInput from './components/RangeInput';
import FilterButtons from './components/FilterButtons';
import PokemonCard from './components/PokemonCard';
import PokemonDetail from './components/PokemonDetail';
import { useEffect, useState } from 'react';
import { Pokemon, PokemonListResponse } from './types/pokemon';
import { getPokemonList, getPokemonDetails } from './services/pokemon';

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        setIsLoading(true);
        setError(null);
        
        // Get initial list
        const listData: PokemonListResponse = await getPokemonList(2000, 0);
        
        // Fetch details for each Pokemon
        const detailsPromises = listData.results.map(p => 
          getPokemonDetails(p.name)
        );
        
        const pokemonDetails = await Promise.all(detailsPromises);
        setPokemons(pokemonDetails);
        console.log(pokemonDetails);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch Pokemon');
      } finally {
        setIsLoading(false);
      }
    }

    fetchPokemon();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container type="main" className="grid grid-cols-[2fr_1fr] gap-x-2 gap-y-6 border-2 border-red-500">
      <SearchBar className="row-start-1" />
      <SortDropdown className="row-start-2 col-start-1" />
      <RangeInput className="row-start-2 col-start-1 justify-self-end" />
      <FilterButtons className="row-start-3 col-start-1" />
      <PokemonDetail className="row-start-2 col-start-2 row-span-3" />

      <Container type="div" className="row-start-4 col-start-1 grid grid-cols-3 items-center justify-center gap-x-4 gap-y-12 mt-12">
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} />
        ))}
      </Container>
    </Container>
  );

  {/* <Container type="main" className="grid grid-cols-3 gap-6 auto-rows-min">
      <SearchBar className="row-start-1 col-span-2" />
      <PokemonDetail className="row-start-1" />
      <SortDropdown className="row-start-2" />
      <RangeInput className="row-start-2 justify-self-end" />
    </Container> */}
}

export default App;
