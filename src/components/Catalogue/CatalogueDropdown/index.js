import { Dropdown } from 'semantic-ui-react';
import axios from 'axios';
import { useEffect, useState } from 'react';

// Style
import './styles.scss';

const CatalogueDropdown = ( {filterByGenreProps}) => {
  const [currentGenre, setCurrentGenre] = useState([]);

  useEffect(() => {
    axios.get(`http://keskonmate.me/api/v1/genres`)
      .then((response) => {
         setCurrentGenre(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  
return(
  <div className="catalogue-dropdown">
    <Dropdown
      className="catalogue-dropdown-item"
      placeholder="Choisissez vos catégories"
      fluid
      selection
      options= {currentGenre.map((item) => (
        { key: (item.id), text: (item.name), value: (item.name) }

      ))}
    />
  </div>
);
}
export default CatalogueDropdown;
