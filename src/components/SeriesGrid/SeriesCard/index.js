import { Trash2, Edit2 } from 'react-feather';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Style
import './styles.scss';

// == Composant
const SeriesCard = () => {
  return (
  <div className="series-card-div">
    {/* Grille de SeriesCard */}
    <Link to="/series/nom">
    <Card className="series-card">
      <Image className="series-card-image" src="https://react.semantic-ui.com/images/avatar/large/matthew.png" ui={false} />
      <div className="series-card-icons-list">
        <Edit2 className="series-card-icon series-card-icon-edit" strokeWidth={1.2} size={35} />
        <Trash2 className="series-card-icon" strokeWidth={1.2} size={35} />
      </div>
      <Card.Content className="series-card-content">
        <Card.Header className="series-card-header">Titre de la série</Card.Header>
        <Card.Description className="series-card-description">
          <ul>
            <li>Date de sortie</li>
            <li>Réalisateur</li>
            <li>Genre</li>
            <li>Acteurs principaux</li>
          </ul>
        </Card.Description>
      </Card.Content>
    </Card>
    </Link>
  </div>
  );
};

SeriesCard.propTypes = {
  serieDetails: PropTypes.shape({
    title: PropTypes.string,
  }),
};

SeriesCard.defaultProps = {
  serieDetails: PropTypes.shape({
    title: 'Titre de la série',
  }),
};

// == Export
export default SeriesCard;
