/* eslint-disable no-duplicate-case */
import {
  CAPTION_ACTION,
  DIFFICULTY_ACTION,
  DURATION_ACTION,
  ETAPE_ACTION,
  FILE_ACTION,
  GLOBAL_INGREDIENT,
  INGREDIENT_ACTION,
  INGREDIENT_NAME_ACTION,
  QUANTITIES_ADD_ACTION,
  QUANTITY_ACTION, SAVE_FETCH_INGREDIENTS, SET_STEPS, TITLE_ACTION,
  TOOGLE_CREATED_INGREDIENTS,
  TOOGLE_CREATED_INGREDIENTS1,
  TOOGLE_INGREDIENTS,
  TOOGLE_STEPS,
  TOOGLE_STEPS2,
  TOOGLE_STEPS3,
  TOOGLE_STEPS4,
  TOOGLE_STEPS5,
  TOOGLE_STEPS6,
  TOOGLE_STEPS7,
  TOOGLE_STEPS8,
  TOOGLE_STEPS9,
  TYPE_ACTION,
  UNIT_ACTION,
  UNIT_ADD_ACTION,
} from '../action/createdRecipe';

export const initialState = {

  title: '',
  caption: '',
  steps: [],
  units: [],
  quantities: [],
  ingredients: [],
  ingredientsAdd: [],
  duration: null,
  difficulty: null,
  category: '',
  recipeIngredients: [],
  toogle: true,
  toogle2: false,
  toogle3: false,
  toogle4: false,
  toogle5: false,
  toogle6: false,
  toogle7: false,
  toogle8: false,
  toogle9: false,
  toogleIngredients: true,
  listIngredients: [],
  toggleCreatedIngredients: false,
  toogleCreatedIngredients1: null,

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TITLE_ACTION:
      return {
        ...state,
        [action.field]: action.value,
      };
    case CAPTION_ACTION:
      return {
        ...state,
        [action.field]: action.value,
      };
    case TYPE_ACTION:
      return {
        ...state,
        [action.field]: action.value,
      };
    case DIFFICULTY_ACTION:
      return {
        ...state,
        [action.field]: action.value,
      };
    case DURATION_ACTION:
      return {
        ...state,
        [action.field]: action.value,
      };
    case INGREDIENT_ACTION:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.field]: action.value,
        },
      };
    case INGREDIENT_NAME_ACTION:
      return {
        ...state,
        ingredientsAdd: {
          ...state.ingredientsAdd,
          [action.field]: action.value,
        },
      };
    case UNIT_ADD_ACTION:
      return {
        ...state,
        ingredientsAdd: {
          ...state.ingredientsAdd,
          [action.field]: action.value,
        },
      }; 
    case QUANTITIES_ADD_ACTION:
      return {
        ...state,
        ingredientsAdd: {
          ...state.ingredientsAdd,
          [action.field]: action.value,
        },
      };
    case GLOBAL_INGREDIENT:
      return {
        ...state,
        recipeIngredients: {
          ...state.recipeIngredients,
          ingredient1:{
            [action.field]: action.value,
          }
        },
      };
    case UNIT_ACTION:
      return {
        ...state,
        units: {
          ...state.units,
          [action.field]: action.value,
        },
      };
    case QUANTITY_ACTION:
      return {
        ...state,
        quantities: {
          ...state.quantities,
          [action.field]: action.value,
        },
      };
    case ETAPE_ACTION:
      return {
        ...state,
        steps: {
          ...state.steps,
          [action.field]: action.value,
        },
      };
    case SET_STEPS:
      return {
        ...state,
        [action.field]: !state[action.field],
      };
    case TOOGLE_STEPS:
      return {
        ...state,
        [action.index]: !state[action.index],
      };
    case TOOGLE_STEPS2:
      return {
        ...state,
        toogle3: !state.toogle3,
      };
    case TOOGLE_STEPS3:
      return {
        ...state,
        toogle4: !state.toogle4,
      };
    case TOOGLE_STEPS4:
      return {
        ...state,
        toogle5: !state.toogle5,
      };
    case TOOGLE_STEPS5:
      return {
        ...state,
        toogle6: !state.toogle6,
      };
    case TOOGLE_STEPS6:
      return {
        ...state,
        toogle7: !state.toogle7,
      };
    case TOOGLE_STEPS7:
      return {
        ...state,
        toogle8: !state.toogle8,
      };
    case TOOGLE_STEPS8:
      return {
        ...state,
        toogle9: !state.toogle9,
      };
    case TOOGLE_STEPS9:
      return {
        ...state,
        toogle9: !state.toogle9,

      };
    case TOOGLE_INGREDIENTS:
      return {
        ...state,
        toogle9: !state.toogle9,

      };
    case FILE_ACTION:
      return {
        ...state,
        picture: action.value,
      };
    case SAVE_FETCH_INGREDIENTS:
      return {
        ...state,
        listIngredients: action.listIngredients,
      };
    case TOOGLE_CREATED_INGREDIENTS:
      return {
        ...state,
        toggleCreatedIngredients: !state.toggleCreatedIngredients,
      };
    case TOOGLE_CREATED_INGREDIENTS1:
      return {
        ...state,
        toogleCreatedIngredients1: state.toogleCreatedIngredients1 + 1,
      };

    default:
      return state;
  }
};

export default reducer;
