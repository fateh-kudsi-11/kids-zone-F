// Styles
import styles from '../styles/Checkout.module.scss';
const {
  checkoutPage,
  checkoutHeader,
  checkoutLogo,
  checkoutContainer,
  checkoutContainerInfo,
  checkoutEmail
} = styles;

// Hooks
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

// Components
import CheckoutAdress from '../components/CheckoutAdress';
import CheckoutDelivery from '../components/CheckoutDelivery';
import CheckoutPayment from '../components/CheckoutPayment';
import PlaceOrder from '../components/PlaceOrder';
import OrderItems from '../components/OrderItems';

// Layout
import Redirect from '../layout/RedirectTo';

const checkout = () => {
  const router = useRouter();
  const { loading, user, isAuth } = useSelector((state) => state.auth);
  const onLogoClick = () => {
    router.push(`/`);
  };

  if (loading) {
    return null;
  }

  if (!isAuth && !loading) {
    return <Redirect path={'/'} />;
  }

  const { email } = user.data;
  return (
    <section className={checkoutPage}>
      <nav className={checkoutHeader}>
        <div className={checkoutLogo} onClick={onLogoClick}>
          <span>KIDS ZONE</span>
        </div>
      </nav>
      <div className={checkoutContainer}>
        <div className={checkoutContainerInfo}>
          <div className={checkoutEmail}>
            <h2>EMAIL ADDRESS</h2>
            <p>{email}</p>
          </div>
          <CheckoutAdress />
          <CheckoutDelivery />
          <CheckoutPayment />
          <PlaceOrder />
        </div>
        <OrderItems />
      </div>
    </section>
  );
};

export default checkout;
