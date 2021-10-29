import { useState, useEffect } from 'react';
import axios from 'axios';

import './styles.scss';

const ComponentTest = () => {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    const url = 'http://ec2-23-22-245-242.compute-1.amazonaws.com/projet-liste-lecture/keskonmate/public/api/v1/seasons';

    axios.get(url)
      .then((response) => {
        const responseToDisplay = response.data;
        setResponseData(responseToDisplay);
      });
  });
  return (
    <div className="result">
      {responseData.map((item) => (
        <div className="result-item" key={item.id}>
          <p>Nom de la série : {item.series.title}</p>
          <p>N° de la saison : {item.seasonNumber}</p>
          <p>Nombre d'épisodes dans cette saison : {item.numberOfEpisodes}</p>
        </div>
      ))}
    </div>
  );
};

export default ComponentTest;
