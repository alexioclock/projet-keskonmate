// Composants
import SeriesGrid from 'src/containers/SeriesGrid';
import CatalogueDropdown from 'src/containers/Catalogue/CatalogueDropdown';
import CatalogueFilters from 'src/containers/Catalogue/CatalogueFilters';


// Style
import './styles.scss';

// == Composant
const Catalogue = () => {


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
