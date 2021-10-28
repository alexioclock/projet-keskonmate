// == Import
import './styles.scss';
import Header from 'src/components/Header';
import ProfilePage from 'src/components/ProfilePage';
// == Composant
const App = () => (
  <div className="app">
    <Header />
    <ProfilePage />
  </div>
);

// == Export
export default App;
