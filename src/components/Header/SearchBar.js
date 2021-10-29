import {
  Search,
} from 'react-feather';

const SearchBar = () => (
  // <div className="search-bar">
  <form className="form">
    <input
      className="form-input"
      placeholder="Que recherchez-vous ?"
    />
    <button
      type="submit"
      className="form-submit"
    >
      <Search height="2rem" size="25" />
    </button>
  </form>

);

export default SearchBar;
