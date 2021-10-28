// Composants
import SeriesGrid from 'src/components/SeriesGrid';

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
    <CatalogueFilters />
    {/* Grille de séries */}
    <SeriesGrid />
  </div>
);

// == Export
export default Catalogue;
