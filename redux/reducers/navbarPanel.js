import { SET_NAV_PANLE } from '../types';

const initialState = {
  isNavbarPanelOpen: false
};

function navbarPanel(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_NAV_PANLE:
      return {
        ...state,
        isNavbarPanelOpen: payload
      };
    default:
      return state;
  }
}

export default navbarPanel;
