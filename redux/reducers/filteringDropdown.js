import { SET_FILTER_DROPDOWN, CLEAR_FILTERS_DROPDOWN } from '../types';
const initialState = {
  isSortOpen: false,
  isProductTypeOpen: false,
  isBrandOpen: false,
  isColorOpen: false,
  isSizeOpen: false,
  isPriceRangeOpen: false,
};

export default function filteringDropdown(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_FILTER_DROPDOWN:
      return {
        ...state,
        ...payload,
      };
    case CLEAR_FILTERS_DROPDOWN:
      return initialState;
    default:
      return state;
  }
}
