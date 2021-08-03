// Styles
import styles from '../styles/CheckoutAdress.module.scss';
const { checkoutAdressContainer } = styles;

// Components
import AddressForm from './AddressForm';
import AddressList from './AddressList';

// Hooks
import { useSelector } from 'react-redux';

const CheckoutAdress = () => {
  const adressBooks = useSelector((state) => state.auth.user.data.adressBooks);

  return (
    <div className={checkoutAdressContainer}>
      <h2>DELIVERY ADDRESS</h2>
      {adressBooks.length === 0 ? (
        <AddressForm newAddress={false} />
      ) : (
        <AddressList />
      )}
    </div>
  );
};

export default CheckoutAdress;
