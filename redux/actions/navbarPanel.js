import { SET_NAV_PANLE } from '../types';

export const setNav = (isNav) => (dispatch) => {
  dispatch({
    type: SET_NAV_PANLE,
    payload: isNav
  });
};
