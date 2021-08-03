// Styles
import styles from '../styles/NavPanel.module.scss';
const { NavPanelContainer, openNavPanel, socialContainer } = styles;

// COMPONENTS
import NavPanelLinksList from './NavPanelLinksList';
import NavbarDirectorylist from './NavbarDirectorylist';
import SocialLinks from './SocialLinks';
import AuthLinks from './AuthLinks';
import FooterLinksNav from './FooterLinksNav';
import SFooter from './SFooter';
import CartWihsListLinks from './CartWihsListLinks';

// Hooks
import { useSelector } from 'react-redux';

const NavPanel = () => {
  const isNavbarPanelOpen = useSelector(
    (state) => state.navbarPanel.isNavbarPanelOpen
  );
  return (
    <div
      className={`${NavPanelContainer} ${
        isNavbarPanelOpen ? openNavPanel : null
      }`}
    >
      <NavPanelLinksList />
      <NavbarDirectorylist />
      <div className={socialContainer}>
        <SocialLinks />
      </div>
      <AuthLinks />
      <CartWihsListLinks />
      <FooterLinksNav />
      <SFooter />
    </div>
  );
};

export default NavPanel;
