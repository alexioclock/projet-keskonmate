// == Import
import './styles.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import ListNavigation from './ListNavigation';
import WatchedSeries from '../SeriesList/WatchedSeries';
import ToWatchSeries from '../SeriesList/ToWatchSeries';
import CurrentSeries from '../SeriesList/CurrentSeries';

// == Composant
const PageList = () => {

  return(
    <div className="list-navigation">
      <Router>
        <ListNavigation />

          <Route path="/series-vues" exact component={WatchedSeries}/>
          <Route path="/series-en-cours" exact component={CurrentSeries}/>
          <Route path="/series-a-voir" exact component={ToWatchSeries}/>
      </Router>

      

    </div>
);
}

// == Export
export default PageList;
