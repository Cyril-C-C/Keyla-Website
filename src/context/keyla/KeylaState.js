import React, { useReducer } from 'react';
import KeylaContext from './keylaContext';
import KeylaReducer from './keylaReducer';
import { SET_LOADING, REMOVE_SPINNER } from '../types';

const KeylaState = (props) => {
  const initialState = {
    loading: false,
  };

  const [state, dispatch] = useReducer(KeylaReducer, initialState);

  // Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });

    setTimeout(() => dispatch({ type: REMOVE_SPINNER }), 5000);
  };

  return (
    <KeylaContext.Provider
      value={{
        loading: state.loading,
        setLoading,
      }}
    >
      {props.children}
    </KeylaContext.Provider>
  );
};

export default KeylaState;
