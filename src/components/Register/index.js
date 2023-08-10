import './styles.scss';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import EscapeHtml from '../../services/EscapeHtml';
import { setRegistrationcredentials, register, setErrorMessage } from '../../action/user';

function Register({
  pseudo, email, password, confirmedPassword,
}) {
  // const {
  //   pseudo, email, password, confirmedPassword,
  // } = useSelector((state) => state.user.settingsRegister);

  const dispatch = useDispatch();

  const [error, setError] = useState(false);

  const handlePseudoChange = (event) => {
    dispatch(setRegistrationcredentials(event.currentTarget.value, 'pseudo'));
  };

  const handleEmailChange = (event) => {
    dispatch(setRegistrationcredentials(event.currentTarget.value, 'email'));
  };

  const handlePasswordChange = (event) => {
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    dispatch(setRegistrationcredentials(event.currentTarget.value, 'password'));
    if (!regex.test(event.currentTarget.value)) {
      setError(true);
    }
    else {
      setError(false);
    }
  };

  const handleconfirmedPasswordChange = (event) => {
    dispatch(setRegistrationcredentials(event.currentTarget.value, 'confirmedPassword'));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(Object.fromEntries(data.entries()));

    dispatch(register());
  };

  return (
    <form
      acceptCharset="utf-8"
      className="registration"
      onSubmit={handleSubmit}
      action="/path/to/api"
      method="POST"
      encytpe="ENCTYPE_HERE"
    >
      <div className="createdRecipe-label">
        <span
          className="label-title"
          htmlFor="pseudo"
        >
          Pseudo*:
        </span>
        <input
          placeholder="Chef O'miam"
          id="pseudo"
          value={pseudo}
          required
          onChange={handlePseudoChange}
          name="pseudo"
        />
      </div>
      <div className="createdRecipe-label">
        <span
          htmlFor="email"
          className="label-title"
        >
          Email*:
        </span>
        <input
          placeholder="email@omiam.com"
          type="email"
          id="email"
          value={email}
          required
          onChange={handleEmailChange}
          name="email"
          // pattern="/\S+@\S+\.\S+/"
        />
      </div>
      <div className="createdRecipe-label">
        <span className="label-title">Votre avatar</span>
        <input
          type="file"
          id="fileUploadUser"
        />
      </div>
      {
        /**
        * Password
        * @param {string} password - password
        * @param {boolean} error - error
        * @return {boolean} - true if password is valid
        */
      }
      <div className="createdRecipe-label">
        <span className="label-title">
          Mot de passe*:
        </span>
        <input
          placeholder="*****"
          type="password"
          id="password"
          value={password}
          required
          onChange={handlePasswordChange}
          name="password"
        />
        {error && (
          <span className="registration-error label-title">
            Le mot de passe doit contenir au moins 12 caractères,
            dont une majuscule , une minuscule &amp;, un chiffre et un caractère spécial
          </span>
        )}
      </div>
      {
        /**
         * Password confirmation
         * @param {string} password - password
         * @param {string} confirmedPassword - confirmed password
         * @return {boolean} - true if password is valid
          */
      }
      <div className="createdRecipe-label">
        <span
          htmlFor="confirmedpassword"
          className="label-title"
        >Confirmation du mot de passe*:
        </span>
        <input
          placeholder="*****"
          type="password"
          id="confirmedpassword"
          value={confirmedPassword}
          onChange={handleconfirmedPasswordChange}
          name="confirmedpassword"
          required
        />
      </div>
      <div className="registration-label-cgu">
        <input
          type="checkbox"
          required
        />
        <span>
          <Link to="/conditions-generales-utilisation">
            J'accepte les
            <span className="registration-label-cgu-link">
              Conditions Générales d'Utilisation
            </span>
          </Link>
        </span>
      </div>
      <span className="registration-legends">* champs obligatoires</span>
      <button type="submit" className="send-button">Valider</button>
    </form>
  );
}

Register.propTypes = {
  pseudo: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmedPassword: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  pseudo: state.user.settingsRegister.pseudo,
  email: state.user.settingsRegister.email,
  password: state.user.settingsRegister.password,
  confirmedPassword: state.user.settingsRegister.confirmedPassword,
});

export default connect(mapStateToProps)(Register);
