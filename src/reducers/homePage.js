import {
  SAVE_RECIPES_LAST,
  SAVE_RECIPES_MIAMS,
  SAVE_RECIPES_RANDOM,
  SET_SETTINGS_FIELD,
  TOGGLE_SPINNER,
  VALUE_TOOGLE,
  SAVE_CATEGORY_ID,
  SAVE_RECIPES_CATEGORY,
  CHANGE_CATEGORY_TITLE,
} from '../action/homePage';

export const initialState = {
  listHomeLast: [],
  listHomeMiams: [],
  listHomeRandom: [],
  recipes: [],
  form: {
    search: '',
  },
  addCards: false,
  toggleSpinner: false,
  categoryId: null,
  categoryRecipes: [],
  categoryTitle: '',
  idSlug: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES_LAST:
      return {
        ...state,
        listHomeLast: action.list,
      };
    case SAVE_RECIPES_MIAMS:
      return {
        ...state,
        listHomeMiams: action.list,
      };

    case SAVE_RECIPES_RANDOM:
      return {
        ...state,
        listHomeRandom: action.list,
      };
    case SET_SETTINGS_FIELD:
      return {
        ...state,
        form: {
          ...state.settings,
          [action.field]: action.value,
        },
      };
    case VALUE_TOOGLE:
      return {
        ...state,
        addCards: !state.addCards,
      };
    case TOGGLE_SPINNER:
      return {
        ...state,
        toggleSpinner: action.value,
      };
    case SAVE_CATEGORY_ID:
      return {
        ...state,
        categoryId: action.value,
      };
    case SAVE_RECIPES_CATEGORY:
      return {
        ...state,
        categoryRecipes: action.recipes,
      };

    case CHANGE_CATEGORY_TITLE:
      return {
        ...state,
        categoryTitle: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
