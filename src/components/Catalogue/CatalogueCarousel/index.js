import { ChevronLeft, ChevronRight } from 'react-feather';

// Style
import './styles.scss';

// == Composant
const CatalogueCarousel = () => (
  <div className="catalogue-carousel">
    <ChevronLeft />
    <ul className="catalogue-carousel-list">
      {/* Carousel du catalogue */}
      <li className="catalogue-carousel-item">
        <a className="catalogue-carousel-item-link">
          Comédie
        </a>
      </li>
      <li className="catalogue-carousel-item">
        <a className="catalogue-carousel-item-link">
          Drame
        </a>
      </li>
      <li className="catalogue-carousel-item">
        <a className="catalogue-carousel-item-link">
          Action
        </a>
      </li>
      <li className="catalogue-carousel-item">
        <a className="catalogue-carousel-item-link">
          Western
        </a>
      </li>
      <li className="catalogue-carousel-item">
        <a className="catalogue-carousel-item-link">
          Horreur
        </a>
      </li>
      <li className="catalogue-carousel-item">
        <a className="catalogue-carousel-item-link">
          Aventure
        </a>
      </li>
    </ul>
    <ChevronRight />
  </div>
);

// == Export
export default CatalogueCarousel;
