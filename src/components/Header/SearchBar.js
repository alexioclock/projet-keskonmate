import { Link } from 'react-router-dom';
import { Search } from 'react-feather';

import PropTypes from 'prop-types';

const SearchBar = ({
  series,
  search,
  handleSearchChange,
  filterSearchedSeries,
}) => (
  <>
    <form className="form">
      <input
        className="form-input"
        placeholder="Que recherchez-vous ?"
        value={search}
        onChange={(event) => {
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
    {search !== '' && (
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
