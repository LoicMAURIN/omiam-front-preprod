// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SET_LOGIN_CREDENTIALS = 'SET_LOGIN_CREDENTIALS';

// Action creator => On l'utilise au moment du dispatch()
export function setLoginCredentials(value, field) {
  return {
    type: SET_LOGIN_CREDENTIALS,
    value: value,
    field: field,
  };
}

// Action Type => On l'utilise dans l'action creator ET dans le reducer
export const SET_REGISTRATION_CREDENTIALS = 'SET_REGISTRATION_CREDENTIALS';

// Action creator => On l'utilise au moment du dispatch()
export function setRegistrationcredentials(value, field) {
  return {
    type: SET_REGISTRATION_CREDENTIALS,
    value: value,
    field: field,
  };
}

export const OPEN_LOGIN = 'OPEN_LOGIN';

export function openLogin() {
  return {
    type: OPEN_LOGIN,
  };
}

export const OPEN_REGISTRATION = 'OPEN_REGISTRATION';

export function openRegistration() {
  return {
    type: OPEN_REGISTRATION,
  };
}

export const LOGIN = 'LOGIN';

export function login() {
  return {
    type: LOGIN,
  };
}


export const LOGOUT = 'LOGOUT';

export function logout() {
  return {
    type: LOGOUT,
  };
}

export const FETCH_FAVORITES = 'FETCH_FAVORITES';

export function fetchFavorites() {
  return {
    type: FETCH_FAVORITES,
  };
}

export const SAVE_FAVORITES = 'SAVE_FAVORITES';

export function saveFavorites(favorites) {
  return {
    type: SAVE_FAVORITES,
    favorites,
  };
}

export const REDIRECT = 'REDIRECT';

export function redirect(lien) {
  return {
    type: REDIRECT,
    lien,
  };
}

export const AUTH_ERROR = 'AUTH_ERROR';

export function authError(message) {
  return {
    type: AUTH_ERROR,
    message,
  };
}

export const REGISTER = 'REGISTER';

export function register() {
  return {
    type: REGISTER,
  };
}

export const KEEP_LOGIN = 'KEEP_LOGIN';

export function keepLogin(token, logs, avatar, userid, role, pseudo) {
  return {
    type: KEEP_LOGIN,
    logs,
    avatar,
    userid,
    role,
    pseudo,
  };
}

export const RESET_REGISTRATION_FORM = 'RESET_REGISTRATION_FORM';

export function resetRegistrationForm() {
  return {
    type: RESET_REGISTRATION_FORM,
  };
}

export const TOGGLE_DROPDOWN_MENU = 'TOGGLE_DROPDOWN_MENU';

export function toggleDropdownMenu() {
  return {
    type: TOGGLE_DROPDOWN_MENU,
  };
}

export const SET_FOCUS = 'SET_FOCUS';

export function setFocus(field, value) {
  return {
    type: SET_FOCUS,
    field: field,
    value: value,
  };
}

export const TOGGLE_BACKOFFICE = 'TOGGLE_BACKOFFICE';

export function toggleBackoffice() {
  return {
    type: TOGGLE_BACKOFFICE,
  };
}

export const RESET_LOGIN_CREDENTIALS = 'RESET_LOGIN_CREDENTIALS';

// Action creator => On l'utilise au moment du dispatch()
export function resetLoginCredentials() {
  return {
    type: RESET_LOGIN_CREDENTIALS,
  };
}

export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

export function setErrorMessage(field, message) {
  return {
    type: SET_ERROR_MESSAGE,
    field,
    message,
  };
}

export const TOGGLE_VALIDATE_FORM = 'TOGGLE_VALIDATE_FORM';

export function toggleValidateForm(value) {
  return {
    type: TOGGLE_VALIDATE_FORM,
    value,
  };
}
