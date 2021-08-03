import { SET_FILTER_DROPDOWN, CLEAR_FILTERS_DROPDOWN } from '../types';

export const setFilterDropdown = (payload) => (dispatch) => {
  dispatch({
    type: CLEAR_FILTERS_DROPDOWN,
  });
  dispatch({
    type: SET_FILTER_DROPDOWN,
    payload,
  });
};
export const closeFilterDropdown = () => (dispatch) => {
  dispatch({
    type: CLEAR_FILTERS_DROPDOWN,
  });
};
