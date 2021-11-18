import SeriesGrid from 'src/containers/SeriesGrid';
import CatalogueDropdown from 'src/containers/Catalogue/CatalogueDropdown';
import CatalogueFilters from 'src/containers/Catalogue/CatalogueFilters';

import './styles.scss';

const Catalogue = () => (
  <div className="catalogue">
    <CatalogueDropdown />
    <CatalogueFilters />
    <SeriesGrid />
  </div>
);

export default Catalogue;
