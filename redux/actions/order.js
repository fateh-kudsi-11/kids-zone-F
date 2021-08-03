import {
  SET_SHIPPING_ADDRESS,
  DELETE_SHIPPING_ADDRESS,
  SET_CHECKOUT_DELIVERY,
  SET_PAYMENT_STATE
} from '../types';

export const setShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: SET_SHIPPING_ADDRESS,
    payload: data
  });
};

export const deleteShippingAddress = () => (dispatch) => {
  dispatch({
    type: DELETE_SHIPPING_ADDRESS
  });
};

export const setCheckoutDelivery = (delivery) => (dispatch) => {
  dispatch({
    type: SET_CHECKOUT_DELIVERY,
    payload: delivery
  });
};
export const setPaymentState = (data) => (dispatch) => {
  dispatch({
    type: SET_PAYMENT_STATE,
    payload: data
  });
};
