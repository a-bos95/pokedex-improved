import Container from './components/Container';
import SearchBar from './components/SearchBar';
import MainSection from './components/MainSection';
import SortDropdown from './components/SortDropdown';
import RangeInput from './components/RangeInput';
import FilterButtons from './components/FilterButtons';

function App() {
  return (
    <>
      <Container type="main" className="flex border border-red-500">

        <Container type="div" className="flex flex-col min-w-[65%] border border-green-500">
          <SearchBar />
          <Container>
          <Container type="div" className="flex items-center justify-between">
            <SortDropdown />
            <RangeInput />
          </Container>
          <FilterButtons />

          <Container type="div" className="flex flex-wrap gap-4">
            <div>CARD</div>
            <div>CARD</div>
            <div>CARD</div>
            <div>CARD</div>
            <div>CARD</div>
          </Container>
        </Container>

        <Container type="div" className="flex flex-col min-w-[35%] border border-blue-500">
          <div>big card</div>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default App;
