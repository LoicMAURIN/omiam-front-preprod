import { SHOW_SIDEBAR, HIDE_SIDEBAR } from '../action/header';

export const initialState = {
  isOpen: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_SIDEBAR:
      return {
        ...state,
        isOpen: true,
      };

    case HIDE_SIDEBAR:
      return {
        ...state,
        isOpen: false,
      };

    default:
      return state;
  }
};

export default reducer;
