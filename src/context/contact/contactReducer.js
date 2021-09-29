import {
    ADD_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
  } from '../types';
  
  // eslint-disable-next-line
  export default (state, action) => {
    switch (action.type) {
      case ADD_CONTACT:
        return {
          ...state,
          contacts: [...state.contacts, action.payload],
        };
      case SET_CURRENT:
        return {
          ...state,
          current: action.payload,
        };
      case CLEAR_CURRENT:
        return {
          ...state,
          current: null,
        };
      default:
        return state;
    }
  };
  