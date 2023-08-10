import { NavLink } from 'react-router-dom';

import './styles.scss';

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-navbar">
        <ul className="footer-list">
          <li className="footer-link">
            <NavLink
              className={
              ({ isActive }) => (isActive ? 'footer-link--active' : 'footer-linsk')
            }
              to="/qui-sommes-nous"
            >
              Qui sommes-nous ?
            </NavLink>
          </li>
          <li className="footer-link">
            <NavLink
              className={
              ({ isActive }) => (isActive ? 'footer-link--active' : 'footer-link')
            }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="footer-link">
            <NavLink
              className={
              ({ isActive }) => (isActive ? 'footer-link--active' : 'footer-link')
            }
              to="/mention-legales"
            >
              Mentions légales
            </NavLink>
          </li>
          <li className="footer-link">
            <NavLink
              className={
              ({ isActive }) => (isActive ? 'footer-link--active' : 'footer-link')
            }
              to="/conditions-generales-utilisation"
            >
              Conditions Générales d'Utilisation
            </NavLink>
          </li>
        </ul>
      </nav>
      <p className="footer-text">Mijoté, par la team O'miam</p>
    </footer>
  );
}

export default Footer;
