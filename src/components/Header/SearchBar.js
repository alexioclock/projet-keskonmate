import { Link } from 'react-router-dom';
import { Search } from 'react-feather';

import PropTypes from 'prop-types';
import { useState } from 'react';

const SearchBar = ({
  series,
  search,
  handleSearchChange,
  filterSearchedSeries,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <form className="form">
        <input
          className="form-input"
          placeholder="Que recherchez-vous ?"
          value={search}
          onChange={(event) => {
            setIsOpen(true);
            handleSearchChange(event.target.value);
            filterSearchedSeries();
          }}
        />
        <button
          type="submit"
          className="form-submit"
        >
          <Search height="2rem" size="25" />
        </button>
      </form>
      {search !== ''
      && isOpen
      && (
        <div className="form-results-div">
          <ul className="form-results-list">
            {series.map((serie) => (
              <Link
                to={`/series/${serie.id}`}
                key={serie.id}
              >
                <li
                  className="form-results-list-item"
                  key={serie.id}
                  onClick={() => {
                    console.log('coucou');
                    setIsOpen(false);
                  }}
                >
                  {serie.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

SearchBar.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  search: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  filterSearchedSeries: PropTypes.func.isRequired,
};

export default SearchBar;
