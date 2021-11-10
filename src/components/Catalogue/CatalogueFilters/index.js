import { useState } from 'react';
import PropTypes from 'prop-types';
import { Filter, X } from 'react-feather';

// Style
import './styles.scss';

// == Composant
const CatalogueFilters = ({ alphabeticalFilter, alphabeticalReverseFilter }) => {
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
                alphabeticalFilter();
              }}
            >
              A-Z
            </button>
          </li>
          <li className="catalogue-filters-item">
            <button
              className="catalogue-filters-item-button"
              type="button"
              onClick={() => {
                alphabeticalReverseFilter();
              }}
            >
              Z-A
            </button>
          </li>
          <li className="catalogue-filters-item">
            <button className="catalogue-filters-item-button" type="button">
              par date de parution
            </button>
          </li>
          <li className="catalogue-filters-item">
            <button className="catalogue-filters-item-button" type="button">
              sans filtre
            </button>
          </li>
        </ul>
      </div>
      )}
    </div>
  );
};

CatalogueFilters.propTypes = {
  alphabeticalFilter: PropTypes.func.isRequired,
  alphabeticalReverseFilter: PropTypes.func.isRequired,
};
// == Export
export default CatalogueFilters;
