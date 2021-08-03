import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import deleteToken from '../../utils/deleteToken';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOAD_USER_START,
  USER_LOADED,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_PASSWORD_SUCCESS,
  UPDATE_USER_PASSWORD_FAIL,
  UPDATE_USER_ADRESS_BOOK_SUCCESS,
  UPDATE_USER_ADRESS_BOOK_FAIL,
  DELETE_ADRESS_BOOK_SUCCESS,
  DELETE_ADRESS_BOOK_FAIL,
  UPDATE_PRODUCT_TO_WISH_LIST_SUCCESS,
  UPDATE_PRODUCT_TO_WISH_LIST_FAIL,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../types';
import { getTotal, clearCart } from './cart';
import { setAlert } from './alerts';

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  } else {
    return;
  }
  dispatch({ type: LOAD_USER_START });
  try {
    const res = await axios.get('/api/v2/auth/me');
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
    dispatch(setAlert('LOGIN success', 'Welcome Back', 'success'));
    dispatch(getTotal());
  } catch (err) {
    dispatch(setAlert('Server Error', 'Please Try Again Later', 'danger'));
    dispatch({ type: AUTH_ERROR });
  }
};

export const registerUser =
  ({ title, firstName, lastName, gender, email, password, interest }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify({
      title,
      firstName,
      lastName,
      gender,
      email,
      password,
      interest
    });
    try {
      const res = await axios.post('/api/v2/auth/register', body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      dispatch(setAlert('Register Success', 'Thanks To Join Us', 'success'));
      dispatch(loadUser());
    } catch (err) {
      console.error(err);
      dispatch({
        type: REGISTER_FAIL
      });
    }
  };

export const updateUser =
  ({ title, firstName, lastName, gender, email }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify({
      title,
      firstName,
      lastName,
      gender,
      email
    });

    try {
      const res = await axios.post('/api/v2/auth/update-user', body, config);
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: res.data
      });
      dispatch(
        setAlert('Update SUCCESS', 'Your Details Has Been Update', 'success')
      );
    } catch (err) {
      dispatch({
        type: UPDATE_USER_FAIL
      });
    }
  };

export const updatePassword =
  (currentPassword, newPassword) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify({
      currentPassword,
      newPassword
    });

    try {
      await axios.post('/api/v2/auth/update-password', body, config);
      dispatch({
        type: UPDATE_USER_PASSWORD_SUCCESS
      });
      dispatch(setAlert('SUCCESS', 'Password Has Been Update', 'success'));
    } catch (err) {
      dispatch({
        type: UPDATE_USER_PASSWORD_FAIL
      });
    }
  };

export const updateAdressBook =
  ({ firstName, lastName, mobile, country, city, address, postcode }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify({
      firstName,
      lastName,
      mobile,
      country,
      city,
      address,
      postcode
    });

    try {
      const res = await axios.post('/api/v2/auth/adress-book', body, config);
      dispatch({
        type: UPDATE_USER_ADRESS_BOOK_SUCCESS,
        payload: res.data
      });
      dispatch(setAlert('SUCCESS', 'Your Addrees Has Been Update', 'success'));
    } catch (err) {
      dispatch({
        type: UPDATE_USER_ADRESS_BOOK_FAIL
      });
    }
  };

export const deleteAdressBook = (_id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/v2/auth/adress-book/${_id}`);
    dispatch({
      type: DELETE_ADRESS_BOOK_SUCCESS,
      payload: res.data
    });
    dispatch(
      setAlert(
        'DELETE SUCCESS',
        'Addrees Has Been Delete From Your Account',
        'success'
      )
    );
  } catch (err) {
    dispatch({
      type: DELETE_ADRESS_BOOK_FAIL
    });
  }
};

export const updateProductToWishList = (id) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/v2/auth/wish-list/${id}`);

    if (res.data.status === 'ADD') {
      dispatch(
        setAlert(
          'ADD SUCCESS',
          'Product Has Been Add To Your Wish List',
          'success'
        )
      );
    } else {
      dispatch(
        setAlert(
          'DELETE SUCCESS',
          'Product Has Been Delete From Your Wish List',
          'success'
        )
      );
    }
    dispatch({
      type: UPDATE_PRODUCT_TO_WISH_LIST_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: UPDATE_PRODUCT_TO_WISH_LIST_FAIL
    });
  }
};

export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    email,
    password
  });
  try {
    const res = await axios.post('/api/v2/auth/login', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch(
      setAlert('LOgin Faild', 'Your Email or Password is incorrect', 'danger')
    );
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

export const logout = () => (dispatch) => {
  deleteToken();
  dispatch(setAlert('Suceess', 'Logout Success', 'success'));
  dispatch(clearCart());
  dispatch({ type: LOGOUT });
};
