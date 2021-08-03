import { SET_GENDER, SET_DIRECTORY, CLEAR_DIRECTORY } from '../types';

export const setGender = (gender) => (dispatch) => {
  dispatch({
    type: SET_GENDER,
    payload: { gender }
  });
};

export const setDirectory = (directory) => (dispatch) => {
  dispatch({
    type: SET_DIRECTORY,
    payload: { directory }
  });
};

export const clearDirectory = () => (dispatch) => {
  dispatch({
    type: CLEAR_DIRECTORY
  });
};
