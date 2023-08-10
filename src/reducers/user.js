import { useNavigate } from "react-router-dom";
import {
  OPEN_LOGIN, OPEN_REGISTRATION, SET_LOGIN_CREDENTIALS, SET_REGISTRATION_CREDENTIALS,
  LOGOUT, AUTH_ERROR, KEEP_LOGIN, RESET_REGISTRATION_FORM, TOGGLE_DROPDOWN_MENU,
  SET_FOCUS, TOGGLE_BACKOFFICE, RESET_LOGIN_CREDENTIALS, SET_ERROR_MESSAGE, TOGGLE_VALIDATE_FORM, SET_IS_LOGIN_OPEN, LOGIN,
} from '../action/user';
export const initialState = {

  settingsRegister: {
    isRegister: false,
    pseudo: '',
    email: '',
    password: '',
    confirmedPassword: '',
    avatar: '',
    errors: {},
    formIsValid: true,
    signinError: {
      pseudoUser: false,
      emailfocused: false,
      passwordfocused: false,
      matchpasswordfocused: false,
    },
  },
  settingsLogIn: {

    email: '',
    password: '',
    userid: '',
    pseudo: '', // Renvoyé par l'API
    avatar: '', // Renvoyé par l'API
    role: '',
  },
  logs: false,
  isLoginOpen: true,
  isRegistrationOpen: false,
  backofficeRights: false,
  userProfile: {
    isListOpen: false,
  },
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logs: true,
      };

    case SET_LOGIN_CREDENTIALS:
      return {
        ...state,
        settingsLogIn: {
          ...state.settingsLogIn,
          [action.field]: action.value,
        },
      };

    case SET_REGISTRATION_CREDENTIALS:
      return {
        ...state,
        settingsRegister: {
          ...state.settingsRegister,
          [action.field]: action.value,
        },
      };

    case OPEN_LOGIN:
      return {
        ...state,
        isLoginOpen: true,
        isRegistrationOpen: false,
      };

    case OPEN_REGISTRATION:
      return {
        ...state,
        isLoginOpen: false,
        isRegistrationOpen: true,
      };

    case LOGOUT:
      return {
        ...state,
        isOpen: false,
        logs: false,
        backofficeRights: false,
        settingsLogIn: {
          ...state.settingsLogIn,
          logs: false,
          pseudo: '',
          avatar: '',
          userid: '',
          role: '',
        },
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.message,
      };

    case KEEP_LOGIN:
      return {
        ...state,
        settingsLogIn: {
          ...state.settingsLogIn,
          logs: action.logs,
          avatar: action.avatar,
          userid: action.userid,
          role: action.role,
          pseudo: action.pseudo,
        },
      };

    case RESET_REGISTRATION_FORM:
      return {
        ...state,
        settingsRegister: {
          ...state.settingsRegister,
          pseudo: '',
          email: '',
          password: '',
          confirmedPassword: '',
        },
        isLoginOpen: true,
        isRegistrationOpen: false,
      };

    case TOGGLE_DROPDOWN_MENU:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
          isListOpen: !state.userProfile.isListOpen,
        },
      };

    case SET_FOCUS:
      return {
        ...state,
        settingsRegister: {
          ...state.settingsRegister,
          [action.field]: action.value,
        },
      };

    case TOGGLE_BACKOFFICE:
      return {
        ...state,
        backofficeRights: !state.backofficeRights,
      };

    case RESET_LOGIN_CREDENTIALS:
      return {
        ...state,
        settingsLogIn: {
          ...state.settingsLogIn,
          email: '',
          password: '',
        },
      };

    case SET_ERROR_MESSAGE:
      return {
        ...state,
        settingsLogIn: {
          ...state.settingsLogIn,
          formIsValid: false,
          errors: {
            ...state.errors,
            [action.field]: action.message,
          },
        },
      };

    case TOGGLE_VALIDATE_FORM:
      return {
        ...state,
        settingsLogIn: {
          ...state.settingsLogIn,
          formIsValid: action.value,
        },
      };
    default:
      return state;
  }
};

export default reducer;
