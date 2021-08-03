// Styles
import styles from '../styles/myCart.module.scss';
const { cartPageContainer } = styles;

// Hooks
import { useSelector } from 'react-redux';

// Components
import EmptyCart from '../components/EmptyCart';
import CartAndTotal from '../components/CartAndTotal';

const myCart = () => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);

  return (
    <section className={cartPageContainer}>
      {cartProducts.length === 0 ? <EmptyCart /> : <CartAndTotal />}
    </section>
  );
};

export default myCart;
