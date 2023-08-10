import './styles.scss';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../action/user';

function Connexion() {
  const dispatch = useDispatch();
  const { backofficeRights } = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="disconnection">
      {
        backofficeRights
        && (
        <button
          type="button"
          className="backoffice-button"
        >
          <a href="https://back-omiam.unetaupechezvous.fr/public/omiam/current/public/login" className="disconnection-links">
            Backoffice
          </a>
        </button>
        )
      }
      <button
        type="button"
        className="disconnection-button"
        onClick={handleLogout}
      >
        <Link to="/connexion" className="disconnection-links">
          Déconnexion
        </Link>
      </button>
    </div>
  );
}

export default Connexion;
