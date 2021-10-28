// == Import
import './notFound.scss';
import OopsIcon from '../../assets/pictures/embarrassed.png'

// == Composant
const NotFound = () => {

  return(
    <div className="notFound">
      <h4>404</h4>
      <p>Oops cette page n'existe pas</p>
      <img src={OopsIcon} alt=""></img>
    </div>
);
}

// == Export
export default NotFound;
