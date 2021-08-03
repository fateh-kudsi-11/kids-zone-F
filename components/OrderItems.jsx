// Styles
import styles from '../styles/OrderItems.module.scss';
const {
  orderItemsContainer,
  orderItemsHeader,
  orderItemsList,
  priceInfoContainer,
  subpriceCheckoutContainer,
  deliveryCheckoutContainer,
  checkoutTotalPayContainer,
  subpriceCheckout,
  deliveryCheckout,
  totalTPay,
  subtotalPrice,
  deliveryPrice,
  totalPriceToPay
} = styles;

// Hooks
import { useEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

// Components
import SingleOrderItems from './SingleOrderItems';

const OrderItems = () => {
  const { totalQty, totalPrice, cartProducts, delivery } = useSelector(
    (state) => state.cart
  );
  const [deliveryCost, setdeliveryCost] = useState(null);

  const router = useRouter();

  const onClick = () => {
    router.push(`/myCart`);
  };

  const setdeliveryCostOnFirstLoad = useCallback(() => {
    const cost = delivery === 'standard' ? 9.99 : 39.99;
    setdeliveryCost(cost);
  }, [delivery, setdeliveryCost]);

  useEffect(() => {
    setdeliveryCostOnFirstLoad();
  }, [setdeliveryCostOnFirstLoad]);
  return (
    <div className={orderItemsContainer}>
      <nav className={orderItemsHeader}>
        <h2>{totalQty} ITEMS</h2>
        <button onClick={onClick}>Edit</button>
      </nav>
      <ul className={orderItemsList}>
        {cartProducts.map((product) => (
          <SingleOrderItems key={product._id} {...product} />
        ))}
      </ul>
      <div className={priceInfoContainer}>
        <div className={subpriceCheckoutContainer}>
          <p className={subpriceCheckout}>Subtotal</p>{' '}
          <p className={subtotalPrice}>${totalPrice.toFixed(2)}</p>
        </div>
        <div className={deliveryCheckoutContainer}>
          <p className={deliveryCheckout}>Delivery</p>{' '}
          <p className={deliveryPrice}>${deliveryCost}</p>
        </div>
        <div className={checkoutTotalPayContainer}>
          <p className={totalTPay}>TOTAL TO PAY</p>{' '}
          <p className={totalPriceToPay}>
            ${(totalPrice + deliveryCost).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItems;
