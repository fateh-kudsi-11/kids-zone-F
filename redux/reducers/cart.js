import {
  USER_LOADED,
  ADD_PRODUCT_TO_CART_SUCCESS,
  DELETE_PRODUCT_FROM_CART_SUCCESS,
  UPDATE_PRODUCT_CART_SUCCESS,
  SET_TOTAL_AND_QTY,
  SET_DELELIVERY,
  CLEAR_CART
} from '../types';

const initialState = {
  cartProducts: [],
  totalQty: 0,
  totalPrice: 0,
  delivery: 'standard'
};

export default function cart(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
    case ADD_PRODUCT_TO_CART_SUCCESS:
    case DELETE_PRODUCT_FROM_CART_SUCCESS:
    case UPDATE_PRODUCT_CART_SUCCESS:
      return {
        ...state,
        cartProducts: payload.data.cart
      };
    case SET_TOTAL_AND_QTY:
      return {
        ...state,
        totalQty: payload.totalQty,
        totalPrice: payload.totalPrice
      };
    case SET_DELELIVERY:
      return {
        ...state,
        delivery: payload
      };
    case CLEAR_CART:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
}
