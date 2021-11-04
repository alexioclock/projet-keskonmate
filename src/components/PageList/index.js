// == Import
import './styles.scss';

import CurrentSeries from 'src/containers/SeriesList/CurrentSeries';
import ListNavigation from './ListNavigation';

// == Composant
const PageList = () => (
  <div className="list-navigation">
      <ListNavigation />
      {/* <CurrentSeries /> */}
      
  </div>
);

// == Export
export default PageList;
