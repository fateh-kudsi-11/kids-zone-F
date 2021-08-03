// Styles
import styles from '../styles/NavbarIcons.module.scss';
const { NavbarIconsContainer, totalQtyClass } = styles;

// Next
import Link from 'next/link';

// Components
import UserPanel from './UserPanel';
import CartPanel from './CartPanel';

// Hooks
import { useState } from 'react';
import { useSelector } from 'react-redux';

// Utils
import setTotalQty from '../utils/setTotalQty';

const NavbarIcons = () => {
  const [isUserPanelOpen, setUserPanel] = useState(false);
  const [isCartPanelOpen, setCartPanel] = useState(false);
  const totalQty = useSelector((state) => state.cart.totalQty);

  const userPanelHandler = (x, e) => {
    setUserPanel(x);
  };
  const cartPanelHandler = (x, e) => {
    setCartPanel(x);
  };
  return (
    <ul className={NavbarIconsContainer}>
      <li
        onMouseEnter={userPanelHandler.bind(this, true)}
        onMouseLeave={userPanelHandler.bind(this, false)}
      >
        <Link href='/myAccount'>
          <i className='material-icons'>account_box</i>
        </Link>
        {isUserPanelOpen && <UserPanel />}
      </li>
      <li>
        <Link href='/wishList'>
          <i className='material-icons'>favorite_border</i>
        </Link>
      </li>
      <li
        onMouseEnter={cartPanelHandler.bind(this, true)}
        onMouseLeave={cartPanelHandler.bind(this, false)}
      >
        <Link href='/myCart'>
          <i className='material-icons'>work_outline</i>
        </Link>
        <p className={totalQtyClass}>{setTotalQty(totalQty)}</p>
        {isCartPanelOpen && <CartPanel />}
      </li>
    </ul>
  );
};

export default NavbarIcons;
