import { Trash2, Edit2 } from 'react-feather';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Style
import './styles.scss';

// == Composant
const SeriesCard = ({
  id,
  series,
}) => {
console.log(series.title);
 
  // console.log(series[0].title);
  return(
    <div className="series-card-div">
      {/* Grille de SeriesCard */}
      <Link to={`/series/${id}`} >
        <Card className="series-card">
          <Image className="series-card-image" src="https://react.semantic-ui.com/images/avatar/large/matthew.png" ui={false} />
          <div className="series-card-icons-list">
            <Edit2 className="series-card-icon series-card-icon-edit" strokeWidth={1.2} size={35} />
            <Trash2 className="series-card-icon" strokeWidth={1.2} size={35} />
          </div>
          <Card.Content className="series-card-content" style={{ padding: '1em 0.2em' }}>
            <Card.Header className="series-card-header" style={{ fontSize: '1.2em', padding: '0' }}>{ series.title }</Card.Header>
            <Card.Description className="series-card-description">
              {/* <ul>
                <li>{ createdAt }</li>
                <li>{genre.map((item) => (item.name))}</li>
              </ul> */}
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
}
SeriesCard.propTypes = {
  series: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,

};

// == Export
export default SeriesCard;
