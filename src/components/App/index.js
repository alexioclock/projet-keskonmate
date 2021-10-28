// == Import
import './styles.scss';
import Header from 'src/components/Header';
import Catalogue from 'src/components/Catalogue';
import Detail from '../Detail';
import Form from '../Form';
import Footer from '../Footer';
import NotFound from '../NotFound';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Catalogue />
    <NotFound />
  </div>
);

// == Export
export default App;
