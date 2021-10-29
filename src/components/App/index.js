// == Import
import './styles.scss';

import Header from 'src/components/Header';
import ProfilePage from 'src/components/ProfilePage';
import Catalogue from 'src/components/Catalogue';
import Detail from '../Detail';
import Form from '../Form';
import Footer from '../Footer';
import Home from '../Home';
import NotFound from '../NotFound';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <ProfilePage />
  </div>
);

// == Export
export default App;
