// Composants
import SeriesGrid from 'src/containers/SeriesGrid';
import CatalogueDropdown from '../../containers/Catalogue/CatalogueDropdown';
import CatalogueFilters from './CatalogueFilters';
import { useEffect, useState } from 'react';
import axios from 'axios';



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
