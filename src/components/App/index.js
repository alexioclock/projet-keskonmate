// == Import
import './styles.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from 'src/containers/Header';
import ProfilePage from 'src/containers/ProfilePage';
import Catalogue from 'src/containers/Catalogue';
import Details from 'src/containers/Details';
import Form from '../Form';
import Footer from '../Footer';
import NotFound from '../NotFound';
import PageList from '../PageList';
import Home from 'src/components/Home';

// == Composant
const App = () => {
  
  return (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/series" exact component={Catalogue} />
      <Route
        path="/series/:slug"
        exact
        component={Details}
      />
      <Route path="/mes-listes" exact component={PageList} />
      <Route path="/mon-compte" exact component={ProfilePage} />
      <Route path="/inscription" exact component={Form} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </BrowserRouter>

  );
}
// == Export
export default App;
