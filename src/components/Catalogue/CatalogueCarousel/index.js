import { ChevronLeft, ChevronRight } from 'react-feather';

// Style
import './styles.scss';

// == Composant
const CatalogueCarousel = () => (
  <div className="catalogue-carousel">
    <ChevronLeft />
    <ul className="catalogue-carousel-list">
      {/* Carousel du catalogue */}
      <li className="catalogue-carousel-item">Comédie</li>
      <li className="catalogue-carousel-item">Drame</li>
      <li className="catalogue-carousel-item">Action</li>
      <li className="catalogue-carousel-item">Western</li>
      <li className="catalogue-carousel-item">Horreur</li>
      <li className="catalogue-carousel-item">Aventure</li>
    </ul>
    <ChevronRight />
  </div>
);

// == Export
export default CatalogueCarousel;
