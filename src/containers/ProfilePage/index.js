import { connect } from 'react-redux';

// on importe le composant de présentation
import ProfilePage from 'src/components/ProfilePage';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  username: state.user.currentUser.userNickname,
  email: state.user.currentUser.email,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
