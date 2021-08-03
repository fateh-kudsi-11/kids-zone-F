// Styles
import styles from '../styles/Navbar.module.scss';
const { navContainer } = styles;

// COMPONENTS
import BurgerNavIcon from '../components/BurgerNavIcon';
import Logo from '../components/Logo';
import NavbarIcons from '../components/NavbarIcons';
import NavPanel from '../components/NavPanel';
import NavLinks from '../components/NavLinks';

const NavBar = () => {
  return (
    <nav>
      <main className={navContainer}>
        <BurgerNavIcon />
        <NavLinks />
        <Logo />
        <NavbarIcons />
      </main>
      <section>
        <NavPanel />
      </section>
    </nav>
  );
};

export default NavBar;
