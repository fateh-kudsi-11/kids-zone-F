// Styles
import styles from '../styles/Brands.module.scss';
const { brandsContainer, brands } = styles;

// Hooks
import { useSelector } from 'react-redux';

const Brands = () => {
  const isNavbarPanelOpen = useSelector(
    (state) => state.navbarPanel.isNavbarPanelOpen
  );

  if (isNavbarPanelOpen) return null;

  return (
    <section className={brandsContainer}>
      <h1>TRENDING BRANDS</h1>
      <div className={brands}>
        <img src='/images/brands/d-1.svg' alt='emporio-armani-logs' />
        <img src='/images/brands/d-2.svg' alt='Burberry-logo' />
        <img src='/images/brands/d-3.svg' alt='Gucci-logo' />
        <img src='/images/brands/d-4.svg' alt='kenzo-logo' />
        <img src='/images/brands/d-5.svg' alt='moncler-logo' />
        <img src='/images/brands/d-6.svg' alt='polo-logo' />
      </div>
    </section>
  );
};

export default Brands;
