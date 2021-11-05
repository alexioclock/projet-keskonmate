import {
  Search,
} from 'react-feather';
import { useState } from 'react';

const SearchBarMobile = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  return (
    <div className="div-form-mobile">

      {/* OnClick: the form-mobile appears */}
      <button
        type="button"
        className="form-display"
        onClick={() => {
          setIsSearchBarOpen(!isSearchBarOpen);
        }}
      >
        <Search />
      </button>

      {/* Form for the mobile that appear when you click on the search icon
    It replaces all the header */}
      {isSearchBarOpen && (
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
        <button
          type="button"
          className="close-searchbar"
        >
          X
        </button>
      </form>
      )}

    </div>
  );
};

export default SearchBarMobile;
