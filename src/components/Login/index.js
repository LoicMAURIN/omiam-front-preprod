import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setLoginCredentials, login, authError } from '../../action/user';

function Login() {
  const {
    email, password,
  } = useSelector((state) => state.user.settingsLogIn);
  const {
    error, errorMessage,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    dispatch(setLoginCredentials(event.currentTarget.value, 'email'));
  };

  const handlePasswordChange = (event) => {
    dispatch(setLoginCredentials(event.currentTarget.value, 'password'));
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (email === '' && password === '') {
      return dispatch(authError('Veuillez saisir votre adresse email et mot de passe'));
    }
    if (email === '') {
      return dispatch(authError('Veuillez saisir votre adresse email'));
    }
    if (password === '') {
      return dispatch(authError('Veuillez saisir votre mot de passe'));
    }

    dispatch(login());
  };

  return (
    <form className="login">
      <div className="login-form">
        {error
        && (
          <p
            className="error-message"
          >{errorMessage}
          </p>
        )}
        <div className="createdRecipe-label">
          <span
            className="label-title"
            htmlFor="email"
          >
            Email*:
          </span>
          <input
            placeholder="email@omiam.com"
            type="email"
            id="email"
            autoComplete="off"
            value={email}
            required
            onChange={handleEmailChange}
          />
        </div>
        <div className="createdRecipe-label">
          <span
            className="label-title"
            htmlFor="password"
          >
            Mot de passe *
          </span>
          <input
            placeholder="*****"
            type="password"
            id="password"
            value={password}
            required
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="send-button" onClick={handleClick}>Connexion</button>
      </div>
    </form>
  );
}

export default Login;
