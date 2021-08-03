import axios from 'axios';
import { setAlert } from './alerts';
import {
  ADD_PRODUCT_TO_CART_SUCCESS,
  ADD_PRODUCT_TO_CART_FAIL,
  DELETE_PRODUCT_FROM_CART_START,
  DELETE_PRODUCT_FROM_CART_SUCCESS,
  UPDATE_PRODUCT_CART_START,
  UPDATE_PRODUCT_CART_SUCCESS,
  SET_TOTAL_AND_QTY,
  SET_DELELIVERY,
  CLEAR_CART
} from '../types';

export const addProductToCart =
  (productId, selectedColor, selectedSize) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify({
      productId,
      selectedColor,
      selectedSize
    });
    try {
      const res = await axios.post('/api/v2/auth/cart', body, config);
      dispatch({ type: ADD_PRODUCT_TO_CART_SUCCESS, payload: res.data });
      if (res.status === 200) {
        return dispatch(
          setAlert(
            'Add to cart fail',
            'This Product Is Already In Your Cart',
            'danger'
          )
        );
      }
      dispatch(
        setAlert('Success', 'Product has been add to your cart', 'success')
      );
      dispatch(getTotal());
    } catch (err) {
      dispatch({ type: ADD_PRODUCT_TO_CART_FAIL });
    }
  };

export const deleteProductFromCart = (_id) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_FROM_CART_START });
  try {
    const res = await axios.delete(`/api/v2/auth/cart/${_id}`);
    dispatch({ type: DELETE_PRODUCT_FROM_CART_SUCCESS, payload: res.data });
    dispatch(getTotal());
    dispatch(
      setAlert('Success', 'Product has been Delete From your cart', 'success')
    );
  } catch (err) {
    console.log(err);
  }
};

export const updateCartProduct = (data, productId) => async (dispatch) => {
  dispatch({ type: UPDATE_PRODUCT_CART_START });
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify(data);
    const res = await axios.put(`/api/v2/auth/cart/${productId}`, body, config);
    dispatch({ type: UPDATE_PRODUCT_CART_SUCCESS, payload: res.data });
    dispatch(getTotal());
    dispatch(setAlert('Success', 'Your Cart Has Been Update', 'success'));
  } catch (err) {
    console.log(err);
  }
};

export const getTotal = () => (dispatch, getState) => {
  const cart = getState().cart.cartProducts;
  if (cart.length === 0) {
    return dispatch({
      type: SET_TOTAL_AND_QTY,
      payload: { totalPrice: 0, totalQty: 0 }
    });
  }
  const totalArr = [];
  const qtyArr = [];
  cart.forEach((product) => {
    const productPrice = (product.price / 1000) * product.qty;
    qtyArr.push(product.qty);
    totalArr.push(productPrice);
  });
  const totalPrice = totalArr.reduce((acc, currentValue) => acc + currentValue);
  const totalQty = qtyArr.reduce((acc, currentValue) => acc + currentValue);
  dispatch({ type: SET_TOTAL_AND_QTY, payload: { totalPrice, totalQty } });
};

export const setDelivery = (delivery) => (dispatch) => {
  dispatch({
    type: SET_DELELIVERY,
    payload: delivery
  });
};

export const clearCart = () => (dispatch) => {
  dispatch({
    type: CLEAR_CART
  });
};
