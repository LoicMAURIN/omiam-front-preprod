import { NavLink } from 'react-router-dom';
import './styles.scss';

function Buttonnavbar() {
  return (
    <div className="profile">
      <nav className="profile-list">
        <NavLink
          to="/mon-compte/mes-recettes/"
          className={
             ({ isActive }) => (isActive ? 'profile-items--active' : 'profile-items')
              }
        >
          <i className="icon-glove icon-glove-profile" />
          <h2 className="profile-title">Mes recettes</h2>
        </NavLink>
        <NavLink
          to="/mon-compte/mes-miams"
          className={
          ({ isActive }) => (isActive ? 'profile-items--active' : 'profile-items')
           }
        >
          <i className="icon-cook icon-cook-profile" />
          <h2 className="profile-title">Mes Miam's</h2>
        </NavLink>
      </nav>
    </div>
  );
}

export default Buttonnavbar;
