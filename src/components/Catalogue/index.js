// Composants
import SeriesGrid from 'src/components/SeriesGrid';

import CatalogueDropdown from '../../containers/Catalogue/CatalogueDropdown';

import CatalogueFilters from './CatalogueFilters';

// Style
import './styles.scss';

// == Composant
const Catalogue = ({ seriesList }) => {

  return(
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
}
// == Export
export default Catalogue;
