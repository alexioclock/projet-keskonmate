import { Dropdown } from 'semantic-ui-react';

// Style
import './styles.scss';


const CatalogueDropdown = ({genre}) => {


return(
  <div className="catalogue-dropdown">
    <Dropdown
      placeholder="Choisissez vos catégories"
      fluid
      multiple
      selection
      options= {genre.map((item) => (
        { key: (item.name), text: (item.name), value: (item.name) }
      ))}
    />
  </div>
);
}
export default CatalogueDropdown;
