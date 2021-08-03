// Styles
import styles from '../styles/PlaceOrder.module.scss';
const { placeOrderButton } = styles;

// Hooks
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const PlaceOrder = () => {
  const { isPaymentReady, shippingAddress } = useSelector(
    (state) => state.order
  );

  const [isAddressEmpty, setAddress] = useState(false);
  const onClick = () => {
    console.log('Button Clicked');
  };
  const isShippingAddressEmpty = useCallback(() => {
    if (Object.keys(shippingAddress).length !== 0) {
      setAddress(true);
    } else {
      setAddress(false);
    }
  }, [shippingAddress, setAddress]);

  useEffect(() => {
    isShippingAddressEmpty();
  }, [isShippingAddressEmpty]);
  return (
    <button
      className={placeOrderButton}
      onClick={onClick}
      disabled={!isPaymentReady || !isAddressEmpty}
    >
      PLACE ORDER
    </button>
  );
};

export default PlaceOrder;
