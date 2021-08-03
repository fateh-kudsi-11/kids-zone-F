// Styles
import styles from '../styles/EmptyCart.module.scss';
const { emptyCartContainer } = styles;

// Hooks
import { useRouter } from 'next/router';

const EmptyCart = () => {
  const router = useRouter();

  const onLinkClick = () => {
    router.push('/');
  };
  return (
    <div className={emptyCartContainer}>
      <h2>Your cart is currently empty</h2>
      <button onClick={onLinkClick}>START SHOPPING</button>
    </div>
  );
};

export default EmptyCart;
