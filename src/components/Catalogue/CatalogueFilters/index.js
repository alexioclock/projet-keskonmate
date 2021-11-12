import { useState } from 'react';
import PropTypes from 'prop-types';
import { Filter, X } from 'react-feather';

// Style
import './styles.scss';

// == Composant
const CatalogueFilters = ({
  setAlphabeticalTitleFilter,
  setReverseAlphabeticalTitleFilter,
  setYoungerToOlderFilter,
  setOlderToYoungerFilter,
  setAlphabeticalDirectorFilter,
  setReverseAlphabeticalDirectorFilter,
}) => {
  // isOpen : booléen qui simule le clic sur l'icone' filtre
  // s'il vaut false : on affiche uniquement l'icone filtre
  // s'il vaut true : il faut déployer le menu des filtres
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
          {/* Filtres du catalogue */}
          <li className="catalogue-filters-item">
            <button
              className="catalogue-filters-item-button"
              type="button"
              onClick={() => {
                setAlphabeticalTitleFilter();
              }}
            >
              par titre<br />(A-Z)
            </button>
          </li>
          <li className="catalogue-filters-item">
            <button
              className="catalogue-filters-item-button"
              type="button"
              onClick={() => {
                setReverseAlphabeticalTitleFilter();
              }}
            >
              par titre<br />(Z-A)
            </button>
          </li>
          <li className="catalogue-filters-item">
            <button
              className="catalogue-filters-item-button"
              type="button"
              onClick={() => {
                setYoungerToOlderFilter();
              }}
            >
              par date de sortie<br />(du plus récent au plus ancien)
            </button>
          </li>
          <li className="catalogue-filters-item">
            <button
              className="catalogue-filters-item-button"
              type="button"
              onClick={() => {
                setOlderToYoungerFilter();
              }}
            >
              par date de sortie<br />(du plus ancien au plus récent)
            </button>
          </li>
          <li className="catalogue-filters-item">
            <button
              className="catalogue-filters-item-button"
              type="button"
              onClick={() => {
                setAlphabeticalDirectorFilter();
              }}
            >
              par réalisateur<br />(A-Z)
            </button>
          </li>
          <li className="catalogue-filters-item">
            <button
              className="catalogue-filters-item-button"
              type="button"
              onClick={() => {
                setReverseAlphabeticalDirectorFilter();
              }}
            >
              par réalisateur<br />(Z-A)
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
