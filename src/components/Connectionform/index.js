import './styles.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Register from '../Register';
import Login from '../Login';
import { openLogin, openRegistration } from '../../action/user';

function Connectionform() {
  
  const { isLoginOpen, isRegistrationOpen } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLoginClick = () => {
    dispatch(openLogin());
  };
  const handleRegistrationClick = () => {
    dispatch(openRegistration());
  };

  return (
    <div className="form">
      <h1>Connectez-vous</h1>
      {isLoginOpen
         && (
         <>
           <Login />
           <h2
             onClick={handleRegistrationClick}
           >
             Vous n'avez pas encore de compte ? Inscrivez-vous.
           </h2>
         </>
         )}
      {isRegistrationOpen && (
        <>
          <Register />
          <h2
            onClick={handleLoginClick}
          >
            Vous avez déjà un compte ? Connectez-vous.
          </h2>
        </>
      )}
    </div>
  );
}

export default Connectionform;
