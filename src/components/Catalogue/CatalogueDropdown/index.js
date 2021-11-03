import { Dropdown } from 'semantic-ui-react';

// Style
import './styles.scss';


const CatalogueDropdown = ({genre}) => {

console.log(genre[0].name);
const options = [
  
  { key: (genre[0].name), text: (genre[0].name), value: (genre[0].name) },
  { key: (genre[1].name), text: (genre[1].name), value: (genre[1].name) },
  { key: (genre[2].name), text: (genre[2].name), value: (genre[2].name) },
  { key: (genre[3].name), text: (genre[3].name), value: (genre[3].name) },
  { key: (genre[4].name), text: (genre[4].name), value: (genre[4].name) },
  { key: (genre[5].name), text: (genre[5].name), value: (genre[5].name) },
];


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
