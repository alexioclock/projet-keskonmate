// == Import
import './styles.scss';

import Header from 'src/components/Header';
import ProfilePage from 'src/components/ProfilePage';
import Catalogue from 'src/components/Catalogue';
import Detail from '../Detail';
import Form from '../Form';
import Footer from '../Footer';
import NotFound from '../NotFound';
import PageList from '../PageList';
import Home from '../Home';


// == Composant
const App = () => (
  <div className="app">
    <Header />
    <PageList />
    <ProfilePage />
  </div>
);

// == Export
export default App;
