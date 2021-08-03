// Styles
import styles from '../styles/CartAndTotal.module.scss';
const { cartAndTotalContainer } = styles;

// Hooks
import { useSelector } from 'react-redux';

// Layout
import Spinner from '../layout/Spinner';

// Components
import CartProductsList from './CartProductsList';
import Total from './Total';

const CartAndTotal = () => {
  const loading = useSelector((state) => state.auth.loading);
  return (
    <div className={cartAndTotalContainer}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <CartProductsList />
          <Total />
        </>
      )}
    </div>
  );
};

export default CartAndTotal;
