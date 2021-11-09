import { connect } from 'react-redux';

// on importe le composant de présentation
import Header from 'src/components/Header';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  username: state.user.currentUser.userNickname,
  isConnected: state.user.isConnected,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Header);
