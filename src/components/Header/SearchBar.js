import {
  Search,
} from 'react-feather';

const SearchBar = () => (
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
