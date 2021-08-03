// Styles
import styles from '../styles/CartPanel.module.scss';
const {
  cartPanel,
  cartPanelEmpty,
  cartTitle,
  cartPanelProductsList,
  cartButtons,
  viewCart,
  checkOut
} = styles;

// Hooks
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

// Componetns
import SingleCartPanelProduct from '../components/SingleCartPanelProduct';

const CartPanel = () => {
  const cartProducts = useSelector((state) => state.cart.cartProducts);
  const router = useRouter();

  const onViewCart = () => {
    router.push(`/myCart`);
  };

  const onCheckOut = () => {
    router.push(`/checkout`);
  };

  return (
    <>
      {cartProducts.length === 0 ? (
        <div className={cartPanelEmpty}>Your Cart Empty</div>
      ) : (
        <div className={cartPanel}>
          <div className={cartTitle}>
            <h2>YOUR CART</h2>
          </div>
          <ul className={cartPanelProductsList}>
            {cartProducts.map((product) => (
              <SingleCartPanelProduct key={product._id} {...product} />
            ))}
          </ul>

          <div className={cartButtons}>
            <button className={viewCart} onClick={onViewCart}>
              VIEW CART
            </button>
            <button className={checkOut} onClick={onCheckOut}>
              CHECK OUT
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPanel;
