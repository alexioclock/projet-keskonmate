
import { Link, NavLink } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';

// const options = [
//   { key: 'series-vues', text: 'Séries déjà vues', value: 'series-vues' },
//   { key: 'actual', text: 'Séries en cours ', value: 'series-en-cours' },
//   { key: 'futur', text: 'Séries à voir', value: 'series-a-voir' },
// ];


const ListNavigation = () => {

  return(
      <div className="desktop-list">
          <ul className="list-container">
            <NavLink activeClassName="current" to="series-vues">
              <li className="list-button">Séries déjà vues</li>
            </NavLink>
              
            <NavLink activeClassName="current" to="series-en-cours">
              <li className="list-button">Séries en cours</li>
            </NavLink>

            <NavLink activeClassName="current" to="series-a-voir">
              <li className="list-button">Séries à voir</li>
            </NavLink>
          </ul>
      </div>
      
    // </div>
  );
}
export default ListNavigation;
