// Composants
import SeriesGrid from 'src/containers/SeriesGrid';

import CatalogueFilters from 'src/containers/Catalogue/CatalogueFilters';
import CatalogueDropdown from '../../containers/Catalogue/CatalogueDropdown';

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
