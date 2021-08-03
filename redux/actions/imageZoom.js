import {
  SET_IMAGE_POSITION,
  CLEAR_IMAGE_POSITION,
  SET_SHOW_LENS,
  SET_IMAGE_INDEX
} from '../types';

export const setImagePosition = (payload) => (dispatch) => {
  dispatch({ type: SET_IMAGE_POSITION, payload });
};

export const clearImagePosition = () => (dispatch) => {
  dispatch({ type: CLEAR_IMAGE_POSITION });
};

export const setShowLens = () => (dispatch) => {
  dispatch({
    type: SET_SHOW_LENS
  });
};

export const setImageIndex = (payload) => (dispatch) => {
  dispatch({ type: SET_IMAGE_INDEX, payload });
};
