// Styles
import styles from '../styles/CheckoutDelivery.module.scss';
const {
  checkoutDelivery,
  deliveryOption,
  deliverdDate,
  deliveryCheckmark,
  checkmark
} = styles;

// Hooks
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { setDelivery } from '../redux/actions/cart';

const CheckoutDelivery = () => {
  const dispatch = useDispatch();
  const delivery = useSelector((state) => state.cart.delivery);

  const onClick = (delivery) => (e) => {
    dispatch(setDelivery(delivery));
  };

  return (
    <div className={checkoutDelivery}>
      <h2>DELIVERY OPTIONS</h2>
      <div className='delivery-options'>
        <div className={deliveryOption} onClick={onClick('standard')}>
          <p>
            <span>$ 10.00</span> Standard Delivery:
          </p>
          <p className={deliverdDate}>Deliverd on 15 working days</p>
          <label htmlFor='stadarad' className={deliveryCheckmark}>
            <input
              type='radio'
              name='stadarad'
              id='stadarad'
              checked={delivery === 'standard'}
              readOnly
            />
            <span className={checkmark}></span>
          </label>
        </div>

        <div className={deliveryOption} onClick={onClick('express')}>
          <p>
            <span>$ 40.00</span> Express Delivery:
          </p>
          <p className={deliverdDate}>Deliverd on 7 working days</p>
          <label htmlFor='express' className={deliveryCheckmark}>
            <input
              type='radio'
              name='express'
              id='express'
              checked={delivery === 'express'}
              readOnly
            />
            <span className={checkmark}></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDelivery;
