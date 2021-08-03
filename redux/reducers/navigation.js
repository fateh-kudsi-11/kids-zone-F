import {
  SET_GENDER,
  SET_DIRECTORY,
  CLEAR_DIRECTORY,
  SET_GENDER_FIRST_LOAD
} from '../types';

const initialState = {
  directory: null,
  gender: 'boys'
};

export default function navigation(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_GENDER:
      localStorage.setItem('gender', payload.gender);
      return { ...state, gender: payload.gender };

    case SET_GENDER_FIRST_LOAD:
      return {
        ...state,
        gender: payload
      };

    case SET_DIRECTORY:
      return { ...state, directory: payload.directory };

    case CLEAR_DIRECTORY:
      return { ...state, directory: null };

    default:
      return state;
  }
}
