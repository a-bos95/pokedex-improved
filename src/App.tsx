import Container from './components/Container';
import SearchBar from './components/SearchBar';
import SortDropdown from './components/SortDropdown';
import RangeInput from './components/RangeInput';
import FilterButtons from './components/FilterButtons';
import PokemonCard from './components/PokemonCard';
import PokemonDetail from './components/PokemonDetail';
import { Pokemon } from './types/api';
import { usePokeAPI } from './hooks/usePokeAPI';
import { useEffect, useState } from 'react';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [activeFilter, setActiveFilter] = useState<{ type: string; url: string } | null>(null);

  const { fetchData, isLoading, error } = usePokeAPI<Pokemon[]>(
    activeFilter?.url || 'pokemon',
    {
      limit: 20,
      withDetails: !activeFilter
    }
  );

  useEffect(() => {
    fetchData().then(data => {
      if (data) setPokemonList(data);
    });
  }, [activeFilter]);

  return (
    <div className="container mx-auto px-4 py-8">
      <Container type="main" className="grid grid-cols-[2fr_1fr] gap-x-2 gap-y-6 border-2 border-red-500">
        <SearchBar className="row-start-1" />
        <SortDropdown className="row-start-2 col-start-1" />
        <RangeInput className="row-start-2 col-start-1 justify-self-end" />
        <FilterButtons 
          className="row-start-3 col-start-1" 
          onFilterChange={setActiveFilter}
          activeFilter={activeFilter}
        />
        <PokemonDetail className="row-start-2 col-start-2 row-span-3" />

        <Container type="div" className="row-start-4 col-start-1 grid grid-cols-3 items-center justify-center gap-x-4 gap-y-12 mt-12 h-[500px] overflow-y-scroll">
          {isLoading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : pokemonList ? (
            pokemonList.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
          ) : null}
        </Container>
      </Container>
    </div>
  );
}

export default App;
