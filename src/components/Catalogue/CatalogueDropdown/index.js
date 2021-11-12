import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { Dropdown } from 'semantic-ui-react';
// Style
import './styles.scss';

const CatalogueDropdown = ({ setGenreFilter }) => {
  const [currentGenre, setCurrentGenre] = useState([]);

  useEffect(() => {
    axios.get('http://keskonmate.me/api/v1/genres')
      .then((response) => {
        setCurrentGenre(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  return (
    <div className="catalogue-dropdown">
      <Dropdown
        className="catalogue-dropdown-item"
        placeholder="Choisissez vos catégories"
        fluid
        selection
        options={currentGenre.map((item) => (
          {
            key: (item.id),
            text: (item.name),
            value: (item.name),
            onClick: () => {
              setGenreFilter(item.id);
              console.log(item.id);
            },
          }
        ))}
      />
    </div>
  );
};

CatalogueDropdown.propTypes = {
  setGenreFilter: PropTypes.func.isRequired,
};

export default CatalogueDropdown;
