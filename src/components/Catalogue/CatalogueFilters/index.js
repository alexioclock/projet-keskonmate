import { useState } from 'react';
import PropTypes from 'prop-types';
import { Filter, X } from 'react-feather';

import './styles.scss';

const CatalogueFilters = ({
  setAlphabeticalTitleFilter,
  setReverseAlphabeticalTitleFilter,
  setYoungerToOlderFilter,
  setOlderToYoungerFilter,
  setAlphabeticalDirectorFilter,
  setReverseAlphabeticalDirectorFilter,
}) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  return (
    <div className="catalogue-filters">
      {!isFiltersOpen && (
      <div className="catalogue-filters-close">
        <Filter size={48} onClick={() => setIsFiltersOpen(true)} />
      </div>
      )}
      {isFiltersOpen && (
      <div className="catalogue-filters-open">
        <div className="catalogue-filters-header">
          <h2>Filtres</h2>
          <X size={30} className="catalogue-filters-close-button" onClick={() => setIsFiltersOpen(false)} />
        </div>
        <ul className="catalogue-filters-list">
          <li className="catalogue-filters-item">
            <button
              className="catalogue-filters-item-button"
              type="button"
              onClick={() => {
                setAlphabeticalTitleFilter();
                setIsFiltersOpen(false);
              }}
            >
              <p>par titre (A-Z)</p>
            </button>
          </li>
          <li className="catalogue-filters-item">
            <button
              className="catalogue-filters-item-button"
              type="button"
              onClick={() => {
                setReverseAlphabeticalTitleFilter();
                setIsFiltersOpen(false);
              }}
            >
              <p>par titre (Z-A)</p>
            </button>
          </li>
          <li className="catalogue-filters-item">
            <button
              className="catalogue-filters-item-button"
              type="button"
              onClick={() => {
                setYoungerToOlderFilter();
                setIsFiltersOpen(false);
              }}
            >
              <p>par date de sortie<br />(du plus récent au plus ancien)</p>
            </button>
          </li>
          <li className="catalogue-filters-item">
            <button
              className="catalogue-filters-item-button"
              type="button"
              onClick={() => {
                setOlderToYoungerFilter();
                setIsFiltersOpen(false);
              }}
            >
              <p>par date de sortie<br />(du plus ancien au plus récent)</p>
            </button>
          </li>
          <li className="catalogue-filters-item">
            <button
              className="catalogue-filters-item-button"
              type="button"
              onClick={() => {
                setAlphabeticalDirectorFilter();
                setIsFiltersOpen(false);
              }}
            >
              <p>par réalisateur (A-Z)</p>
            </button>
          </li>
          <li className="catalogue-filters-item">
            <button
              className="catalogue-filters-item-button"
              type="button"
              onClick={() => {
                setReverseAlphabeticalDirectorFilter();
                setIsFiltersOpen(false);
              }}
            >
              <p>par réalisateur (Z-A)</p>
            </button>
          </li>
        </ul>
      </div>
      )}
    </div>
  );
};

CatalogueFilters.propTypes = {
  setAlphabeticalTitleFilter: PropTypes.func.isRequired,
  setReverseAlphabeticalTitleFilter: PropTypes.func.isRequired,
  setYoungerToOlderFilter: PropTypes.func.isRequired,
  setOlderToYoungerFilter: PropTypes.func.isRequired,
  setAlphabeticalDirectorFilter: PropTypes.func.isRequired,
  setReverseAlphabeticalDirectorFilter: PropTypes.func.isRequired,
};

// == Export
export default CatalogueFilters;
