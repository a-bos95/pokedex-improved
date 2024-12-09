import Container from './components/Container';
import SearchBar from './components/SearchBar';
import SortDropdown from './components/SortDropdown';
import RangeInput from './components/RangeInput';
import FilterButtons from './components/FilterButtons';
import PokemonCard from './components/PokemonCard';
import PokemonDetail from './components/PokemonDetail';

function App() {
  return (
    <Container type="main" className="grid grid-cols-[2fr_1fr] gap-x-2 gap-y-6 border-2 border-red-500">
      <SearchBar className="row-start-1" />
      <SortDropdown className="row-start-2 col-start-1" />
      <RangeInput className="row-start-2 col-start-1 justify-self-end" />
      <FilterButtons className="row-start-3 col-start-1" />
      <PokemonDetail className="row-start-2 col-start-2 row-span-3" />

      <Container type="div" className="row-start-4 col-start-1 grid grid-cols-3 items-center justify-center gap-4">
        <PokemonCard number={1} name="Bulbasaur" types={["Grass", "Poison"]} />
        <PokemonCard number={2} name="Ivysaur" types={["Grass", "Poison"]} />
        <PokemonCard number={3} name="Venusaur" types={["Grass", "Poison"]} />
        <PokemonCard number={4} name="Charmander" types={["Fire"]} />
        <PokemonCard number={5} name="Charmeleon" types={["Fire"]} />
        <PokemonCard number={6} name="Charizard" types={["Fire", "Flying"]} />
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
