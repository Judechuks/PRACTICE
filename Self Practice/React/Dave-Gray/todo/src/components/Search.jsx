import { useGlobalContext } from "../context";

function Search() {
  const { search, setSearch } = useGlobalContext();
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        placeholder="Search Items"
        role="searchbox"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}
export default Search;
