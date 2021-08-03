// Styles
import styles from '../styles/CartProductsList.module.scss';
const { cartProductListContainer, cartProductList } = styles;

// Hooks
import { useSelector } from 'react-redux';

// Components
import SingleCartProduct from './SingleCartProduct';

const CartProductsList = () => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  return (
    <div className={cartProductListContainer}>
      <h2>MY CART</h2>
      <ul className={cartProductList}>
        {cartProducts.map((product) => (
          <SingleCartProduct key={product._id} {...product} />
        ))}
      </ul>
    </div>
  );
};

export default CartProductsList;
