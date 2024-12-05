import { useRef, useEffect, useState } from 'react';
import Container from './components/Container';
import SearchBar from './components/SearchBar';
import SortDropdown from './components/SortDropdown';
import RangeInput from './components/RangeInput';
import FilterButtons from './components/FilterButtons';
import PokemonCard from './components/PokemonCard';
import PokemonDetail from './components/PokemonDetail';

function App() {
  const searchBarRef = useRef<HTMLDivElement>(null);
  const [spacerHeight, setSpacerHeight] = useState(0);

  useEffect(() => {
    if (searchBarRef.current) {
      setSpacerHeight(searchBarRef.current.offsetHeight);
    }
  }, []);

  return (
    <Container type="div" className="border-2 border-red-500">
      <div className="flex gap-8 border-2 border-blue-500">
        {/* Left Column */}
        <Container type="div" className="flex-1 border-2 border-yellow-500">
          <div ref={searchBarRef}>
            <SearchBar />
          </div>
          <div className="border-2 border-purple-500">
            <div className="flex items-center justify-between">
              <SortDropdown />
              <RangeInput />
            </div>
            <FilterButtons />
            <div className="flex flex-wrap gap-4">
              <PokemonCard number="387" name="Turtwig" types={['Grass']} />
              <PokemonCard number="388" name="Grotle" types={['Grass']} />
              <PokemonCard number="389" name="Torterra" types={['Grass', 'Ground']} />
            </div>
          </div>
        </Container>

        {/* Right Column */}
        <Container type="div" className="w-[35%] border-2 border-pink-500">
          <div style={{ height: spacerHeight }} className="border-2 border-green-500" />
          <PokemonDetail />
        </Container>
      </div>
    </Container>
  );
}

export default App;
