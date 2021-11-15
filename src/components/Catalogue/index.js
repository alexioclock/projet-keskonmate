// Composants
import SeriesGrid from 'src/containers/SeriesGrid';
import CatalogueDropdown from 'src/containers/Catalogue/CatalogueDropdown';
import CatalogueFilters from 'src/containers/Catalogue/CatalogueFilters';

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
