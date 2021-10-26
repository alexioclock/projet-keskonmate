import { Filter, X } from 'react-feather';

// Style
import './styles.scss';

// == Composant
const CatalogueFilters = () => {
  // isOpen : booléen qui simule le clic sur l'icone' filtre
  // s'il vaut false : on affiche uniquement l'icone filtre
  // s'il vaut true : il faut déployer le menu des filtres
  const isOpen = false;
  let classCss = 'catalogue-filters';
  if (isOpen) {
    classCss += ' catalogue-filters--open';
  }
  return (
    <div className={classCss}>
      {!isOpen && <Filter />}
      {isOpen && (
      <div className="catalogue-filters-menu">
        <div className="catalogue-filters-header">
          <h2>Filtres</h2>
          <X />
        </div>
        <ul className="catalogue-filters-list">
          {/* Filtres du catalogue */}
          <li className="catalogue-filters-item">par ordre alphabétique</li>
          <li className="catalogue-filters-item">par date de parution</li>
          <li className="catalogue-filters-item">autre filtre</li>
        </ul>
      </div>
      )}
    </div>
  );
};

// == Export
export default CatalogueFilters;
