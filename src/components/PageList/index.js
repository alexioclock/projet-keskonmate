// == Import
import './list.scss';

import {BrowserRouter as Router, Route } from 'react-router-dom';
import ListNavigation from './ListNavigation';
import PassedSeries from '../SeriesList/PassedSeries';
import FutureSeries from '../SeriesList/FutureSeries';
import ActualSeries from '../SeriesList/ActualSeries';

// == Composant
const PageList = () => {

  return(
    <div className="ListNavigation">
      <Router>
        <ListNavigation />

          <Route path="/series-vues" exact component={PassedSeries}/>
          <Route path="/series-a-voir" exact component={FutureSeries}/>
          <Route path="/serie-en-cours" exact component={ActualSeries}/>
      </Router>

    </div>
);
}

// == Export
export default PageList;
