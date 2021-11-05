// == Import
import './styles.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from 'src/containers/Header';
import ProfilePage from 'src/containers/ProfilePage';
import Catalogue from 'src/containers/Catalogue';
import Details from 'src/containers/Details';
import Form from 'src/containers/Form';
import WatchedSeries from 'src/containers/SeriesList/WatchedSeries';
import ToWatchSeries from 'src/containers/SeriesList/ToWatchSeries';
import CurrentSeries from 'src/containers/SeriesList/CurrentSeries';
import Home from 'src/components/Home';
import NotFound from '../NotFound';
import Footer from '../Footer';

// == Composant
const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/series-vues" exact component={WatchedSeries} />
      <Route path="/series-en-cours" exact component={CurrentSeries} />
      <Route path="/series-a-voir" exact component={ToWatchSeries} />
      <Route path="/series" exact component={Catalogue} />
      <Route
        path="/series/:slug"
        exact
        component={Details}
      />
      <Route path="/mes-listes" exact component={CurrentSeries} />
      <Route path="/mon-compte" exact component={ProfilePage} />
      <Route path="/inscription" exact component={Form} />
      <Route component={NotFound} />

    </Switch>
    <Footer />
  </BrowserRouter>
);

// == Export
export default App;
