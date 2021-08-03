// Styles
import styles from '../styles/NavbarAndFilter.module.scss';
const { navbarContainer, navbarHidden, staticP } = styles;

//Layout
import Navbar from '../layout/Navbar';
import FilterNav from '../layout/FilterNav';

// Hooks
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const NavbarAndFilter = () => {
  const [showNav, setShowNav] = useState(true);
  const [lens, setLens] = useState(0);
  const isNavbarPanelOpen = useSelector(
    (state) => state.navbarPanel.isNavbarPanelOpen
  );

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (isNavbarPanelOpen) return;
      const newLens = window.pageYOffset;
      setShowNav(lens < newLens);
      setLens(newLens);
    });
  }, [showNav, lens, setShowNav, setLens]);
  return (
    <nav
      className={`${isNavbarPanelOpen ? staticP : navbarContainer} ${
        showNav ? navbarHidden : null
      }`}
    >
      <Navbar />
      <FilterNav />
    </nav>
  );
};

export default NavbarAndFilter;
