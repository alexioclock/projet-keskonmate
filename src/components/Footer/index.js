// == Import
<<<<<<< HEAD
import './styles.scss';

// == Composant
const Footer = () => (
  <div className="footer">
    <ul className="container-footer">
      <li className="element-footer">Copyright @2021 - Promo Valkyrie</li>
      <li className="element-footer-slash">|</li>
      <li className="element-footer">API fournie par TMDB</li>
      <li className="element-footer-slash">|</li>
      <li className="element-footer">Contact</li>
      <li className="element-footer-slash">|</li>
      <li className="element-footer">Mentions légales</li>
    </ul>
  </div>
=======
import './footer.scss';
import { Link } from 'react-router-dom';

// == Composant
const Footer = () => {

  return(
    <div className="footer">
      <ul className="container-footer">
        <li className="element-footer">Copyright @2021 - Promo Valkyrie</li>
        <li className="element-footer-slash">|</li>
        <li className="element-footer">API fournie par TMDB</li>
        <li className="element-footer-slash">|</li>
        <li className="element-footer"><Link to="/">Contact</Link></li>
        <li className="element-footer-slash">|</li>
        <li className="element-footer"><Link to="/">Mentions légales</Link></li>
      </ul>
    </div>
>>>>>>> dev
);

// == Export
export default Footer;
