// Styles
import styles from '../styles/PaymentIcons.module.scss';
const { paymentIconsContainer } = styles;
const PaymentIcons = () => {
  return (
    <div className={paymentIconsContainer}>
      <img src='/icons/mastercard.svg' alt='mastercard-logo' />
      <img src='/icons/visa.svg' alt='visa-logo' />
      <img src='/icons/american-express.svg' alt='american-express-logo' />
      <img src='/icons/paypal.svg' alt='paypal-logo' />
    </div>
  );
};

export default PaymentIcons;
