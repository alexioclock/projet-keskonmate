import { Trash2, Edit2 } from 'react-feather';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Style
import './styles.scss';

// == Composant
const SeriesCard = ({
  id,
  title,
  releaseDate,
  director,
  genre,
  actor,
}) => (
  <div className="series-card-div">
    {/* Grille de SeriesCard */}
    <Link to={`/series/${id}`}>
      <Card className="series-card">
        <Image className="series-card-image" src="https://react.semantic-ui.com/images/avatar/large/matthew.png" ui={false} />
        <div className="series-card-icons-list">
          <Edit2 className="series-card-icon series-card-icon-edit" strokeWidth={1.2} size={35} />
          <Trash2 className="series-card-icon" strokeWidth={1.2} size={35} />
        </div>
        <Card.Content className="series-card-content">
          <Card.Header className="series-card-header">{ title }</Card.Header>
          <Card.Description className="series-card-description">
            <ul>
              <li>{ releaseDate }</li>
              <li>{ director }</li>
              <li>{genre.map((item) => (item.name))}</li>
              <li>{actor.map((item) => (`${item.firstname} ${item.lastname}`))}</li>
            </ul>
          </Card.Description>
        </Card.Content>
      </Card>
    </Link>
  </div>
);

SeriesCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  actor: PropTypes.arrayOf(
    PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default SeriesCard;
