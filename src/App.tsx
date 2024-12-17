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
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [idRange, setIdRange] = useState({ from: 1, to: 151 });

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
        const sortedData = sortPokemon(data, sortOrder);
        const filteredByRange = filterByRange(sortedData, idRange);
        setFilteredList(filteredByRange);
      }
    });
  }, [activeFilter]);

  const sortPokemon = (pokemon: Pokemon[], order: 'asc' | 'desc') => {
    return [...pokemon].sort((a, b) => {
      if (order === 'asc') {
        return a.id - b.id;
      }
      return b.id - a.id;
    });
  };

  const filterByRange = (pokemon: Pokemon[], range: { from: number; to: number }) => {
    return pokemon.filter(p => {
      const id = typeof p.id === 'number' ? p.id : parseInt(p.id);
      return id >= range.from && id <= range.to;
    });
  };

  const handleSort = (order: 'asc' | 'desc') => {
    setSortOrder(order);
    const sortedPokemon = sortPokemon(filteredList, order);
    setFilteredList(sortedPokemon);
  };

  const handleRangeChange = (range: { from: number; to: number }) => {
    setIdRange(range);
    let filtered = pokemonList;

    if (searchQuery.trim()) {
      filtered = filtered.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    filtered = filterByRange(filtered, range);

    filtered = sortPokemon(filtered, sortOrder);

    setFilteredList(filtered);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      const filteredByRange = filterByRange(pokemonList, idRange);
      setFilteredList(sortPokemon(filteredByRange, sortOrder));
      return;
    }

    const filtered = pokemonList.filter(pokemon => 
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    const filteredByRange = filterByRange(filtered, idRange);
    setFilteredList(sortPokemon(filteredByRange, sortOrder));
  };

  const handlePokemonSelect = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <>
      <Container type="main" className="grid grid-cols-[2fr_1fr] gap-x-4 gap-y-6">
        <SearchBar onSearch={handleSearch} className="row-start-1" />
        <Container type="div" className="row-start-2 flex justify-between">
          <SortDropdown className="w-1/2" onSort={handleSort} />
          <RangeInput 
            className="w-1/2 justify-end" 
            onRangeChange={handleRangeChange}
            fromPlaceholder={idRange.from.toString()}
            toPlaceholder={idRange.to.toString()}
          />
        </Container>
        <FilterButtons className="row-start-3" onFilterChange={setActiveFilter} activeFilter={activeFilter} />
        <Container type="div" className="row-start-4 grid grid-cols-3 gap-12 mt-12">
          {isLoading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : filteredList.length > 0 ? (
            filteredList.map((pokemon) => (
              <PokemonCard 
                key={pokemon.id} 
                pokemon={pokemon}
                onClick={() => handlePokemonSelect(pokemon)}
                selected={selectedPokemon?.id === pokemon.id}
              />
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-500">No Pokémon found</div>
          )}
        </Container>
        <PokemonDetail 
          className="row-start-2 col-start-2 row-span-4" 
          pokemon={selectedPokemon}
        />
      </Container>
    </>
  );
}

export default App;
