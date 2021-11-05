// == Import
import './styles.scss';
import PropTypes from 'prop-types';
import Popcorn from '../../assets/pictures/popcorn.png';

// == Composant
const Form = ( {
        inputNickname, 
        emailInput, 
        passwordInput, 
        confirmPasswordInput,
        setInputNickname,
        setEmailInput,
        setPasswordInput,
        setConfirmPasswordInput,
      }) =>  {

        
      return(
    <div className="form">
      <form 
      className="suscribe-form" 
      action="/" 
      method="post"
       >
      
        <h1>Inscription</h1>
      
        <div className="pseudo-container">
              <input 
              type="text" 
              id="name" 
              name="user_name" 
              placeholder="pseudo"
              value={inputNickname}
              onChange={(event) => {
              setInputNickname(event.target.value);
              }}
              />    
        </div>

        <div className="email-container">
              <input 
              type="email" 
              id="mail" 
              name="user_mail" 
              placeholder="e-mail"
              value={emailInput}
              onChange={(event) => {
              setEmailInput(event.target.value);
              }}
              />
        </div>

        <div className="password-container">
              <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Mot de passe"
              value={passwordInput}
              onChange={(event) => {
              setPasswordInput(event.target.value);
              }}
              />
        </div>
        <div className="password-validation-container">
              <input 
              type="password" 
              id="password-validation" 
              name="password-validation" 
              placeholder="Confirmer le mot de passe"
              value={confirmPasswordInput}
              onChange={(event) => {
                setConfirmPasswordInput(event.target.value);
              }}
              />
        </div>

        <button 
        className="validation-button" 
        type="submit"
        >Valider
        </button>
        <img src={Popcorn} alt="" className="popcorn"></img>
      </form>
      
      <ul className="social-links">
        <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"   stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a></li>
        <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"   stroke-linejoin="round" class="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a></li>
        <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"   stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a></li>

      </ul>
  </div>
);
}


Form.propTypes = {
  inputNickname: PropTypes.string.isRequired,
  emailInput: PropTypes.string.isRequired,
  passwordInput: PropTypes.string.isRequired,
  confirmPasswordInput: PropTypes.string.isRequired,
  setInputNickname: PropTypes.func.isRequired,
  setEmailInput: PropTypes.func.isRequired,
  setPasswordInput: PropTypes.func.isRequired,
  setConfirmPasswordInput: PropTypes.func.isRequired,
};


// == Export
export default Form;
