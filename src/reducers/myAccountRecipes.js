import { SAVE_RECIPES_MY_ACCOUNT, SAVE_FAVORITES_MIAMS } from '../action/myAccountRecipes';

export const initialState = {
  list: [],
  miams: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES_MY_ACCOUNT:
      return {
        ...state,
        list: action.list,
      };
    case SAVE_FAVORITES_MIAMS:
      return {
        ...state,
        miams: action.list,
      };
    default:
      return state;
  }
};

export default reducer;
