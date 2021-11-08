import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'react-feather';

import PropTypes from 'prop-types';

const SearchBarMobile = ({
  series,
  search,
  handleSearchChange,
  filterSearchedSeries,
}) => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  return (
    <div className="div-form-mobile">

      {/* OnClick: the form-mobile appears */}
      <button
        type="button"
        className="form-display"
        onClick={() => {
          setIsSearchBarOpen(true);
        }}
      >
        <Search />
      </button>

      {/* Form for the mobile that appear when you click on the search icon
    It replaces all the header */}
      {isSearchBarOpen && (
        <>
          <form className="form-mobile">
            <input
              className="form-mobile-input"
              placeholder="Que recherchez-vous ?"
              value={search}
              onChange={(event) => {
                handleSearchChange(event.target.value);
                filterSearchedSeries();
              }}
            />
            <button
              type="button"
              className="close-searchbar"
              onClick={() => {
                setIsSearchBarOpen(false);
              }}
            >
              <X />
            </button>
          </form>
          <div className="mobile-form-results-div">
            <ul className="mobile-form-results-list">
              {search !== ''
              && series.map((serie) => (
                <Link
                  to={`/series/${serie.id}`}
                  onClick={() => {
                    setIsSearchBarOpen(false);
                  }}
                  key={serie.id}
                >
                  <li
                    className="mobile-form-results-list-item"
                    key={serie.id}
                  >
                    {serie.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

SearchBarMobile.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  search: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  filterSearchedSeries: PropTypes.func.isRequired,
};

export default SearchBarMobile;
