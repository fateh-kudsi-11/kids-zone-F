// Styles
import styles from '../styles/Foooter.module.scss';
const { footerContainer } = styles;
// Components
import SocialAndPayment from '../components/SocialAndPayment';
import LFooter from '../components/LFooter';
import SFooter from '../components/SFooter';
const Footer = () => {
  return (
    <footer className={footerContainer}>
      <SocialAndPayment />
      <LFooter />
      <SFooter />
    </footer>
  );
};

export default Footer;
