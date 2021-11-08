import { connect } from 'react-redux';

// on importe le composant de présentation
import UserDropdown from 'src/components/Header/UserDropdown';
import { logout } from 'src/actions/login';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({


});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  logout: () => {
    const action = logout();
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
