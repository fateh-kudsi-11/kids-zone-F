// Styles
import styles from '../styles/SocialAndPayment.module.scss';
const { socialContainer, divider } = styles;
// Components
import SocialLinks from './SocialLinks';
import PaymentIcons from './PaymentIcons';
const SocialAndPayment = () => {
  return (
    <section className={socialContainer}>
      <SocialLinks />
      <div className={divider} />
      <PaymentIcons />
    </section>
  );
};

export default SocialAndPayment;
