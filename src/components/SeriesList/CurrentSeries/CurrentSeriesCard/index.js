import { Trash2, Edit2 } from 'react-feather';
import { Card, Image } from 'semantic-ui-react';

// Style
import './styles.scss';

// == Composant
const SeriesCard = () => (
  <div className="series-card-div">
    {/* Grille de SeriesCard */}
    <Card className="series-card" style={{width:'13em'}}>
      <Image className="series-card-image" src="https://react.semantic-ui.com/images/avatar/large/matthew.png" ui={false} />
      <div className="series-card-icons-list">

      </div>
      <Card.Content className="series-card-content" style={{marginTop:'30px'}}>
        <Card.Header className="series-card-header">Titre de la série</Card.Header>
        <Card.Description className="series-card-description">
          <ul>
            <li>Date de sortie</li>
            <li>Genre</li>
          </ul>
        </Card.Description>
        <Card.Description style={{width:'100%', height:'50px'}} >
          <form className="info-form" style={{marginTop:'1em'}}>
              <input type="number" placeholder="Saison n°" value=""></input>
              <input type="number" placeholder="Episode n°" value=""></input>
          </form>
        </Card.Description>
      </Card.Content>
    </Card>
  </div>
  
);

// == Export
export default SeriesCard;
