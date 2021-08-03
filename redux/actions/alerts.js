import { SET_ALERT, REMOVE_ALERT } from '../types';
import { v4 as uuid } from 'uuid';

export const setAlert = (alertTitle, alertMsg, alertType) => (dispatch) => {
  const id = uuid();
  dispatch({
    type: SET_ALERT,
    payload: { alertTitle, alertMsg, alertType, id }
  });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 5000);
};

export const removeAlert = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_ALERT,
    payload: id
  });
};
