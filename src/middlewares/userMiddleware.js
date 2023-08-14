import axios from 'axios';

import {
  LOGIN,
  LOGOUT,
  authError,
  REGISTER,
  resetRegistrationForm,
  toggleBackoffice,
  resetLoginCredentials,
  setRegistrationcredentials,
} from '../action/user';

const axiosInstance = axios.create({
  // par exemple, on peut définir une url de base !
  baseURL: 'https://back.omiam-preprod.fr/api/',
});

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      const { email, password, } = state.user.settingsLogIn;
      axiosInstance.post(
        'login',
        {
          username: email,
          password: password,
        },
        )
        .then((response) => {
          //console.log(response);
          // on extrait la propriété data de la reponse
          // que l'on stocke dans une vaiable user
          const { data: user } = response;
          // j'enregistre mon token sur l'instance d'axios
          axiosInstance.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;

          // - Save in localStorage
          window.localStorage.setItem('token', user.token);
          window.localStorage.setItem('userid', user.userid);
          window.localStorage.setItem('pseudo', user.pseudo);
          window.localStorage.setItem('avatar', user.avatar);
          window.localStorage.setItem('role', user.role);
          
          store.dispatch(setRegistrationcredentials(user.avatar, 'avatar'));
          // Redirect of the user towards to home page
          return next(action);
        }).finally(() => {
          window.location = '/';
          console.log('login ok');
          localStorage.setItem('logs', true);
        })
        .catch((error) => {
          console.log(error);

          store.dispatch(authError('Email ou mot de passe incorrect'));
          store.dispatch(resetLoginCredentials());

          return next(action);
        });

      return next(action);
    }
    case LOGOUT:
      // on nettoie notre instance axios du token
      axiosInstance.defaults.headers.common.Authorization = null;
      localStorage.removeItem('token');
      localStorage.removeItem('avatar');
      localStorage.removeItem('role');
      localStorage.removeItem('userid');
      localStorage.removeItem('pseudo');
      localStorage.removeItem('logs');

      return next(action);
    case REGISTER: {
      const state = store.getState();
      const {
        email, password, pseudo,
      } = state.user.settingsRegister;

      const formData = new FormData();
      formData.append('json', JSON.stringify({
        email: email,
        pseudo: pseudo,
        password: password,
      }));

      formData.append('picture', document.getElementById('fileUploadUser').files[0]);
      axios({
        method: 'post',
        url: 'https://back.omiam-preprod.fr/api/users',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((response) => {
          // Redirect of the user towards to home page
          store.dispatch(resetRegistrationForm());
          return next(action);
        })
        .catch((error) => {
          console.log(error);
          //store.dispatch(authError('Email ou mot de passe incorrect'));
          return next(action);
        });
      return next(action);
    }
    default:
      return next(action);
  }
};

export default userMiddleware;
