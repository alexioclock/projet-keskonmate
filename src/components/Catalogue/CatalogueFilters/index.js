import { Filter, X } from 'react-feather';

// Style
import './styles.scss';

// == Composant
const CatalogueFilters = () => {
  // isOpen : booléen qui simule le clic sur l'icone' filtre
  // s'il vaut false : on affiche uniquement l'icone filtre
  // s'il vaut true : il faut déployer le menu des filtres
  const isOpen = true;
  return (
    <div className="catalogue-filters">
      {!isOpen && (
      <div className="catalogue-filters-close">
        <Filter size={48} />
      </div>
      )}
      {isOpen && (
      <div className="catalogue-filters-open">
        <div className="catalogue-filters-header">
          <h2>Filtres</h2>
          <X size={48} className="catalogue-filters-close-button" />
        </div>
        <ul className="catalogue-filters-list">
          {/* Filtres du catalogue */}
          <li className="catalogue-filters-item">
            <a className="catalogue-filters-item-link">
              par ordre alphabétique
            </a>
          </li>
          <li className="catalogue-filters-item">
            <a className="catalogue-filters-item-link">
              par date de parution
            </a>
          </li>
          <li className="catalogue-filters-item">
            <a className="catalogue-filters-item-link">
              autre filtre
            </a>
          </li>
        </ul>
      </div>
      )}
    </div>
  );
};

// == Export
export default CatalogueFilters;
