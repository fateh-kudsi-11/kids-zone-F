import axios from 'axios';

import {
  SET_PRODUCT_WISH_LIST_START,
  SET_PRODUCT_WISH_LIST_SUCCESS
} from '../types';

import { setAlert } from './alerts';

export const setProductWishList = () => async (dispatch, getState) => {
  const loading = getState().auth.loading;

  if (!loading) {
    const wishListIds = getState().auth.user.data.wishList;

    dispatch({
      type: SET_PRODUCT_WISH_LIST_START
    });
    if (wishListIds.length === 0) {
      return dispatch({
        type: SET_PRODUCT_WISH_LIST_SUCCESS,
        payload: []
      });
    } else {
      try {
        const res = await axios.get(`/api/v2/products/wish-list`);
        dispatch({
          type: SET_PRODUCT_WISH_LIST_SUCCESS,
          payload: res.data.data
        });
      } catch (err) {
        dispatch(setAlert('Server Error', 'Please Try Again Later', 'danger'));
      }
    }
  }
};
