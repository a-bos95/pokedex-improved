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
  const [filteredList, setFilteredList] = useState<Pokemon[]>([]);
  const [activeFilter, setActiveFilter] = useState<{ type: string; url: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const { fetchData, isLoading, error } = usePokeAPI<Pokemon[]>(
    activeFilter?.url || 'pokemon',
    {
      limit: 9,
      withDetails: !activeFilter
    }
  );

  useEffect(() => {
    fetchData().then(data => {
      if (data) {
        setPokemonList(data);
        setFilteredList(data);
      }
    });
  }, [activeFilter]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredList(pokemonList);
      return;
    }

    const filtered = pokemonList.filter(pokemon => 
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredList(filtered);
  };

  return (
    <>
      <Container type="main" className="grid grid-cols-[2fr_1fr] gap-x-4 gap-y-6">
        <SearchBar onSearch={handleSearch} className="row-start-1" />
        <Container type="div" className="row-start-2 flex justify-between">
          <SortDropdown className="w-1/2" />
          <RangeInput className="w-1/2 justify-end" />
        </Container>
        <FilterButtons className="row-start-3" onFilterChange={setActiveFilter} activeFilter={activeFilter} />
        <Container type="div" className="row-start-4 grid grid-cols-3 gap-12 mt-12">
          {isLoading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : filteredList.length > 0 ? (
            filteredList.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-500">No Pokémon found</div>
          )}
        </Container>
        <PokemonDetail className="row-start-2 col-start-2 row-span-4" />
      </Container>
    </>
  );
}

export default App;
