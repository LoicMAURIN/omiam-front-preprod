import {
  SAVE_RECIPE,
  SAVE_RECIPE_INGREDIENTS,
  SAVE_RECIPE_STEPS,
  SAVE_COMMENTS,
  COMMENT_ACTION,
  ID_SLUG_RECIPE,
  SAVE_RECIPE_USERSID,
  SUBMIT_USERS_ID_MIAMS,
  SET_IS_MIAMS,
  FETCH_RECIPE,
  SAVE_MIAMS,
} from '../action/oneRecipe';

export const initialState = {
  list: [],
  ingredients: [],
  steps: [],
  comments: [],
  comment: '',
  nbMiams: null,
  toogleMiams: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPE:
      return {
        ...state,
        list: action.list,
      };
    case FETCH_RECIPE:
      return {
        ...state,
      };
    case SAVE_MIAMS:
      return {
        ...state,
        nbMiams: action.nbMiams,
      };
    case SAVE_RECIPE_INGREDIENTS:
      return {
        ...state,
        ingredients: action.list,
      };
    case SAVE_RECIPE_STEPS:
      return {
        ...state,
        steps: action.list,
      };
    case SAVE_COMMENTS:
      return {
        ...state,
        comments: action.list,
      };
    case COMMENT_ACTION:
      return {
        ...state,
        comment: {
          ...state.comment,
          [action.field]: action.value,
        },
      };
    case ID_SLUG_RECIPE:
      return {
        ...state,
        idSlug: action.idSlug,
      };
    case SAVE_RECIPE_USERSID:
      return {
        ...state,
        usersId: action.usersId,
      };
    case SUBMIT_USERS_ID_MIAMS:
      return {
        ...state,
      };
    case SET_IS_MIAMS:
      return {
        ...state,
        toogleMiams: !state.toogleMiams,
      };
    default:
      return state;
  }
};

export default reducer;
