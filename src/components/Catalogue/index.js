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
    {/* Filtres */}
    <CatalogueFilters />
    {/* Grille de séries */}
    <SeriesGrid />
  </div>
);

// == Export
export default Catalogue;
