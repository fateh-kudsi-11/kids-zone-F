// Styles
import styles from '../styles/BurgerNavIcon.module.scss';
const { BurgerNavContainer, BurgerNav, firstBar, lastBar, hidden, margin } =
  styles;

// hooks
import { useDispatch, useSelector } from 'react-redux';

// Redux - action
import { setNav } from '../redux/actions/navbarPanel';

const BurgerNavIcon = () => {
  const isNavbarPanelOpen = useSelector(
    (state) => state.navbarPanel.isNavbarPanelOpen
  );
  const dispatch = useDispatch();
  const onBurgerNavClick = () => {
    dispatch(setNav(!isNavbarPanelOpen));
  };
  return (
    <div
      className={`${BurgerNavContainer} ${isNavbarPanelOpen ? margin : null}`}
      onClick={onBurgerNavClick}
    >
      <div
        className={`${BurgerNav} ${isNavbarPanelOpen ? firstBar : null}`}
      ></div>
      <div
        className={`${BurgerNav} ${isNavbarPanelOpen ? hidden : null}`}
      ></div>
      <div
        className={`${BurgerNav} ${isNavbarPanelOpen ? lastBar : null}`}
      ></div>
    </div>
  );
};

export default BurgerNavIcon;
