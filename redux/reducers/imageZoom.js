import {
  SET_IMAGE_POSITION,
  CLEAR_IMAGE_POSITION,
  SET_SHOW_LENS,
  SET_IMAGE_INDEX
} from '../types';

const initialState = {
  x: null,
  y: null,
  showLens: false,
  imageIndex: 0
};

export default function imageZoom(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_IMAGE_POSITION:
      return {
        ...state,
        ...payload
      };
    case SET_SHOW_LENS:
      return {
        ...state,
        showLens: !state.showLens
      };
    case SET_IMAGE_INDEX:
      return {
        ...state,
        imageIndex: payload
      };
    case CLEAR_IMAGE_POSITION:
      return (state = initialState);
    default:
      return state;
  }
}
