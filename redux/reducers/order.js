import {
  SET_SHIPPING_ADDRESS,
  DELETE_SHIPPING_ADDRESS,
  SET_CHECKOUT_DELIVERY,
  SET_PAYMENT_STATE
} from '../types';
const initialState = {
  shippingAddress: {},
  paymentMethod: {},
  isPaymentReady: false
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: payload
      };
    case DELETE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: {}
      };
    case SET_CHECKOUT_DELIVERY:
      return {
        ...state,
        delivery: payload
      };
    case SET_PAYMENT_STATE:
      return {
        ...state,
        isPaymentReady: payload
      };
    default:
      return state;
  }
}
