import {
  SET_TOKEN,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOAD_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_PASSWORD_SUCCESS,
  UPDATE_USER_PASSWORD_FAIL,
  UPDATE_USER_ADRESS_BOOK_SUCCESS,
  UPDATE_USER_ADRESS_BOOK_FAIL,
  DELETE_ADRESS_BOOK_SUCCESS,
  DELETE_ADRESS_BOOK_FAIL,
  DELETE_PRODUCT_FROM_CART_SUCCESS,
  DELETE_PRODUCT_FROM_CART_START,
  UPDATE_PRODUCT_TO_WISH_LIST_SUCCESS,
  UPDATE_PRODUCT_TO_WISH_LIST_FAIL,
  UPDATE_PRODUCT_CART_START,
  UPDATE_PRODUCT_CART_SUCCESS,
  ADD_PRODUCT_TO_CART_SUCCESS,
  ADD_PRODUCT_TO_CART_FAIL,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../types';

const initialState = {
  token: null,
  isAuth: null,
  loading: true,
  user: null,
  wishListIds: [],
  isLoginFail: false
};

export default function auth(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case SET_TOKEN:
      return {
        ...state,
        token: payload
      };
    case USER_LOADED:
    case UPDATE_USER_SUCCESS:
    case UPDATE_USER_ADRESS_BOOK_SUCCESS:
    case DELETE_ADRESS_BOOK_SUCCESS:
    case UPDATE_PRODUCT_TO_WISH_LIST_SUCCESS:
    case ADD_PRODUCT_TO_CART_SUCCESS:
    case DELETE_PRODUCT_FROM_CART_SUCCESS:
    case UPDATE_PRODUCT_CART_SUCCESS:
      return {
        ...state,
        isAuth: true,
        loading: false,
        user: payload,
        wishListIds: payload.data.wishList
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuth: true,
        loading: false,
        isLoginFail: false
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
    case UPDATE_USER_FAIL:
    case UPDATE_USER_PASSWORD_FAIL:
    case UPDATE_USER_ADRESS_BOOK_FAIL:
    case DELETE_ADRESS_BOOK_FAIL:
    case UPDATE_PRODUCT_TO_WISH_LIST_FAIL:
    case ADD_PRODUCT_TO_CART_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuth: false,
        loading: false,
        user: null,
        wishListIds: []
      };
    case LOGIN_FAIL:
      return {
        ...state,
        token: null,
        isAuth: false,
        loading: false,
        user: null,
        wishListIds: [],
        isLoginFail: true
      };
    case LOAD_USER_START:
    case DELETE_PRODUCT_FROM_CART_START:
    case UPDATE_PRODUCT_CART_START:
      return {
        ...state,
        loading: true
      };
    case UPDATE_USER_PASSWORD_SUCCESS:
    default:
      return state;
  }
}
