// Styles
import styles from '../styles/CheckoutPayment.module.scss';
const {
  checkoutPaymentContainer,
  checkoutForm,
  formGroup,
  cvcAndDateGroup,
  cvcAndDate
} = styles;

// Hooks
import { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux - Action
import { setPaymentState } from '../redux/actions/order';

const CheckoutPayment = () => {
  const dispatch = useDispatch();
  const isPaymentReady = useSelector((state) => state.order.isPaymentReady);

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvcNumber, setCvcNumber] = useState('');

  const checkPaymentStateInFirstLoad = useCallback(() => {
    if (cardNumber && expiryDate && cvcNumber) {
      dispatch(setPaymentState(true));
    } else {
      if (isPaymentReady) {
        dispatch(setPaymentState(false));
      }
    }
  }, [cvcNumber, expiryDate, cardNumber, isPaymentReady, setPaymentState]);

  useEffect(() => {
    checkPaymentStateInFirstLoad();
  }, [checkPaymentStateInFirstLoad]);

  const cardNumberHandler = (e) => {
    const valueArr = e.target.value.split('');

    if (valueArr.length === 20) return;

    if (valueArr.length === 4) {
      valueArr.splice(4, 0, ' ');
    }

    if (valueArr.length === 9) {
      valueArr.splice(9, 0, ' ');
    }

    if (valueArr.length === 14) {
      valueArr.splice(14, 0, ' ');
    }

    setCardNumber(valueArr.join(''));
  };

  const expiryDateHandler = (e) => {
    const valueArr = e.target.value.split('');

    if (valueArr.length === 6) return;

    if (valueArr.length === 2) {
      valueArr.splice(2, 0, '/');
    }
    setExpiryDate(valueArr.join(''));
  };

  const cvcNumberHandler = (e) => {
    const valueArr = e.target.value.split('');

    if (valueArr.length === 4) return;

    setCvcNumber(e.target.value);
  };
  return (
    <div className={checkoutPaymentContainer}>
      <h2>PAYMENT METHODS</h2>
      <form className={checkoutForm}>
        <div className={formGroup}>
          <label htmlFor='card-number'>Card Number:</label>
          <input
            type='text'
            value={cardNumber}
            onChange={cardNumberHandler}
            name='card-number'
            id='card-number'
            placeholder='Please Add Your Card Number :'
          />
        </div>
        <div className={cvcAndDateGroup}>
          <div className={cvcAndDate}>
            <label htmlFor='card-date'>Expiry Date:</label>
            <input
              type='text'
              name='card-date'
              id='card-date'
              value={expiryDate}
              onChange={expiryDateHandler}
              placeholder='MM / YY:'
            />
          </div>
          <div className={cvcAndDate}>
            <label htmlFor='cvc'>Cvc Number:</label>
            <input
              type='text'
              name='cvc'
              id='cvc'
              placeholder='CVC:'
              value={cvcNumber}
              onChange={cvcNumberHandler}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPayment;
