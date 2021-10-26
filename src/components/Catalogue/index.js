// Composants
import SeriesGrid from 'src/components/SeriesGrid';
import CatalogueCarousel from './CatalogueCarousel';
import CatalogueFilters from './CatalogueFilters';

// Style
import './styles.scss';

// == Composant
const Catalogue = () => (
  <div className="catalogue">
    {/* Carousel */}
    <CatalogueCarousel />
    <div className="filters-and-grid">
      {/* Filtres */}
      <CatalogueFilters />
      {/* Grille de séries */}
      <SeriesGrid />
    </div>
  </div>
);

// == Export
export default Catalogue;
