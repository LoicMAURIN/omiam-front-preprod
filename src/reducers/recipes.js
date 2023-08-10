import { SAVE_RECIPES } from '../action/recipes';

export const initialState = {
  list: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_RECIPES:
      return {
        ...state,
        list: action.list,
      };
    default:
      return state;
  }
};

export default reducer;