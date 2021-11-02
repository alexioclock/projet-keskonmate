import { Dropdown } from 'semantic-ui-react';

// Style
import './styles.scss';

const options = [
  { key: 'comedie', text: 'Comédie', value: 'comedie' },
  { key: 'drame', text: 'Drame', value: 'drame' },
  { key: 'western', text: 'Western', value: 'western' },
  { key: 'action', text: 'Action', value: 'action' },
  { key: 'horreur', text: 'Horreur', value: 'horreur' },
  { key: 'animes', text: 'Animes', value: 'animes' },
];

const CatalogueDropdown = ({genre}) => {



return(
  <div className="catalogue-dropdown">
    <Dropdown
      placeholder="Choisissez vos catégories"
      fluid
      multiple
      selection
      options={options}

    />
  </div>
);
}
export default CatalogueDropdown;
