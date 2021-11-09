import { Dropdown } from 'semantic-ui-react';
import axios from 'axios';
import { useEffect, useState } from 'react';



// Style
import './styles.scss';


const CatalogueDropdown = ({genre}) => {

  const [currentGenre, setCurrentGenre] = useState([]);


  useEffect(() => {
    axios.get(`http://keskonmate.me/api/v1/genres`)
      .then((response) => {
        console.log(response.data[0].name);
         setCurrentGenre(response.data);
        // setIsLoading(false);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);


  console.log(currentGenre);
  
return(
  <div className="catalogue-dropdown">
    <Dropdown
      placeholder="Choisissez vos catégories"
      fluid
      multiple
      selection
      options= {currentGenre.map((item) => (
        { key: (item.id), text: (item.name), value: (item.name) }
      ))}
    />
  </div>
);
}
export default CatalogueDropdown;
