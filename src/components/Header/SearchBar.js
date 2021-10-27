import {
  Search,
} from 'react-feather';

const SearchBar = () => (
  <div className="search-bar">
    <form className="form">
      <input
        className="form-input"
        placeholder="Que recherchez-vous ?"
      />
      <button
        type="submit"
        className="form-submit"
      >
        <Search size="20" />
      </button>
    </form>

    {/* Form for the mobile that appear when you click on the search icon
    It replaces all the header */}
    <div className="form-mobile-element">
      <form className="form-mobile">
        <input
          className="form-mobile-input"
          placeholder="Que recherchez-vous ?"
        />
        <button
          type="submit"
          className="form-mobile-submit"
        >
          <Search size="20" />
        </button>
      </form>
    </div>

    {/* OnClick: the form-mobile appears */}
    <button
      type="button"
      className="form-display"
    >
      <Search size="20" />
    </button>

  </div>
);

export default SearchBar;
