// Styles
import styles from '../styles/Total.module.scss';
const { totalContainer, totalInfo, subTitle, deliveryClass, totalClass } =
  styles;
// Hooks
import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { setDelivery } from '../redux/actions/cart';

const Total = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { totalPrice, delivery } = useSelector((state) => state.cart);

  const [total, setTotal] = useState(0);
  const onDeliveryChange = (e) => {
    dispatch(setDelivery(e.target.value));
  };

  const setTotalPrice = useCallback(() => {
    const deliveryPrice = delivery === 'standard' ? 9.99 : 39.99;
    const finleTotal = deliveryPrice + totalPrice;
    setTotal(finleTotal);
  }, [delivery, totalPrice]);

  useEffect(() => {
    setTotalPrice();
  }, [setTotalPrice]);

  const onLinkClick = () => {
    router.push(`/checkout`);
  };
  return (
    <div className={totalContainer}>
      <h2>TOTAL</h2>
      <div className={totalInfo}>
        <div className={subTitle}>
          <p>Sub-Total</p>
          <p>{`${totalPrice.toFixed(2)}$`}</p>
        </div>
        <div className={deliveryClass}>
          <p>Delivery</p>
          <select
            name='delivery'
            id='delivery'
            value={delivery}
            onChange={onDeliveryChange}
          >
            <option value='standard'>Standard - 9.99$</option>
            <option value='express'>Express - 39.99$</option>
          </select>
        </div>
        <div className={totalClass}>
          <p>Total</p>
          <p>{total.toFixed(2)}$</p>
        </div>
      </div>
      <button onClick={onLinkClick}>CHECKOUT</button>
    </div>
  );
};

export default Total;
