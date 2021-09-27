import { SET_LOADING, REMOVE_SPINNER } from '../types';

// eslint-disable-next-line 
export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: false,
      };
    case REMOVE_SPINNER:
        return null;
    default:
      return state;
  }
};
