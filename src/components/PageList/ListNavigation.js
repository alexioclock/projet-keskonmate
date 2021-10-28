
import { Link, NavLink } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';

const options = [
  { key: 'passed', text: 'Séries déjà vues', value: 'passed' },
  { key: 'actual', text: 'Séries en cours ', value: 'actual' },
  { key: 'futur', text: 'Séries à voir', value: 'futur' },
];


const ListNavigation = () => {

  return(
    <div className="list">
      <div className="mobile-list">
        <Dropdown
              placeholder="Choisissez votre liste"
              fluid
              selection
              options={options}
            />
      </div>
      <div className="desktop-list">
          <ul className="list-container">
            <NavLink activeClassName="current" to="series-vues">
              <li className="list-button">Séries déjà vues</li>
            </NavLink>
              
            <NavLink activeClassName="current" to="serie-en-cours">
              <li className="list-button">Séries à voir</li>
            </NavLink>
            <NavLink activeClassName="current" to="/series-a-voir">
              <li className="list-button">Séries en cours</li>
            </NavLink>
          </ul>
      </div>
      
    </div>
  );
}
export default ListNavigation;
