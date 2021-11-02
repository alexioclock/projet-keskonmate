// Composants
import SeriesGrid from 'src/containers/SeriesGrid';

import CatalogueDropdown from './CatalogueDropdown';

import CatalogueFilters from './CatalogueFilters';

// Style
import './styles.scss';

// == Composant
const Catalogue = () => (
  <div className="catalogue">
    {/* Carousel */}
    <CatalogueDropdown />
    {/* Filtres */}
    <div className="filters-and-grid">
      <CatalogueFilters />
      {/* Grille de séries */}
      <SeriesGrid />
    </div>
  </div>
);
// == Export
export default Catalogue;
