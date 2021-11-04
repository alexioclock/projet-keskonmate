import { NavLink } from 'react-router-dom';
import CurrentSeries from '../SeriesList/CurrentSeries'
// const options = [
//   { key: 'series-vues', text: 'Séries déjà vues', value: 'series-vues' },
//   { key: 'actual', text: 'Séries en cours ', value: 'series-en-cours' },
//   { key: 'futur', text: 'Séries à voir', value: 'series-a-voir' },
// ];

const ListNavigation = () => (
  <div className="desktop-list">
    <ul className="list-container">
      <NavLink activeClassName="current" to="series-vues" exact>
        <li className="list-button">Séries déjà vues</li>
      </NavLink>
      <NavLink activeClassName="current" to="series-en-cours" exact>
        <li className="list-button">Séries en cours</li>
      </NavLink>
      <NavLink activeClassName="current" to="series-a-voir" exact>
        <li className="list-button">Séries à voir</li>
      </NavLink>
    </ul>

  </div>
);

export default ListNavigation;
