import { Trash2, Edit2 } from 'react-feather';
import { Card, Image } from 'semantic-ui-react';

// Style
import './styles.scss';

// == Composant
const SeriesCard = () => (
  <div className="series-card">
    {/* Grille de SeriesCard */}
    <Card>
      <Image className="series-card-image" src="https://react.semantic-ui.com/images/avatar/large/matthew.png" ui={false} />
      <Edit2 />
      <Trash2 />
      <Card.Content>
        <Card.Header>Titre de la série</Card.Header>
        <Card.Description>
          Description de la série : Genre, résumé, acteurs, réalisateur
        </Card.Description>
      </Card.Content>
    </Card>
  </div>
);

// == Export
export default SeriesCard;
