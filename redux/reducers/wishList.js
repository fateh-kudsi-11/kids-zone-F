import {
  SET_PRODUCT_WISH_LIST_START,
  SET_PRODUCT_WISH_LIST_SUCCESS
} from '../types';

const initialState = {
  wishListProduct: [],
  loading: true
};

export default function wishList(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_PRODUCT_WISH_LIST_START:
      return {
        ...state,
        loading: true
      };
    case SET_PRODUCT_WISH_LIST_SUCCESS:
      return {
        ...state,
        wishListProduct: payload,
        loading: false
      };
    default:
      return state;
  }
}
