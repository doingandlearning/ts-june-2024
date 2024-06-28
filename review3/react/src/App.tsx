import CategorySelector from './components/CategorySelector';
import IdInput from './components/IdInput';
import DisplayData from './components/DisplayData';
import SearchInput from './components/SearchInput';
import "./App.css"
import useFetchWithCache from './hooks/useFetchWithCache';

function App() {
  const {
    category,
    setCategory,
    id,
    setId,
    searchQuery,
    setSearchQuery,
    data,
    error,
    handleFetch,
  } = useFetchWithCache();

  return (
    <div className="app-container">
      <div className="top">
        <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CategorySelector category={category} setCategory={setCategory} />
        <IdInput id={id} setId={setId} />
        <button className="button" onClick={handleFetch}>Fetch Data</button>
      </div>
      <div>
        {data && <DisplayData data={data} error={error} />}
      </div>
    </div>
  );
}

export default App;
