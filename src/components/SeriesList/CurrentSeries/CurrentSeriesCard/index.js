import { Trash2, Edit2 } from 'react-feather';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Style
import './styles.scss';

// == Composant
const SeriesCard = ({ title, releaseDate, genre }) => (
  <div className="series-card-div">
    {/* Grille de SeriesCard */}
    <Link to="/series/nom">
      <Card className="series-card">
        <Image className="series-card-image" src="https://react.semantic-ui.com/images/avatar/large/matthew.png" ui={false} />
        <div className="series-card-icons-list">
          <Edit2 className="series-card-icon series-card-icon-edit" strokeWidth={1.2} size={35} />
          <Trash2 className="series-card-icon" strokeWidth={1.2} size={35} />
        </div>
        <Card.Content className="series-card-content" style={{ padding: '1em 0.2em' }}>
          <Card.Header className="series-card-header" style={{ fontSize: '1.2em', padding: '0' }}>{ title }</Card.Header>
          <Card.Description className="series-card-description">
            <ul>
              <li>{ releaseDate }</li>
              <li>{genre.map((item) => (item.name))}</li>
            </ul>
            <form className="info-form" style={{ marginTop: '0.5em' }}>
              <input type="number" placeholder="Saison n°" />
              <input type="number" placeholder="Episode n°" />
            </form>
          </Card.Description>
        </Card.Content>
      </Card>
    </Link>
  </div>
);

SeriesCard.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default SeriesCard;
