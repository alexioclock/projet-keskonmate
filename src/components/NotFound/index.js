// == Import
import './notFound.scss';
import OopsIcon from '../../assets/pictures/embarrassed.png';

// == Composant
const NotFound = () => (
  <div className="notFound">
    <h4>404</h4>
    <p>Oops cette page n'existe pas</p>
    <img src={OopsIcon} alt="" />
  </div>
);

// == Export
export default NotFound;
