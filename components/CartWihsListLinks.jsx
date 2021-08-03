// Styles
import styles from '../styles/CartWihsListLinks.module.scss';
const { container } = styles;

// Hooks
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

// Redux - Actions
import { setNav } from '../redux/actions/navbarPanel';

const CartWihsListLinks = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

  const router = useRouter();

  const onNavLinkClick = (x, e) => {
    router.push(x);
    dispatch(setNav(false));
  };

  if (!isAuth) {
    return null;
  }
  return (
    <ul className={container}>
      <li onClick={onNavLinkClick.bind(this, '/myAccount')}>
        <i className='material-icons'>account_box</i>
        <span>My Account</span>
      </li>
      <li onClick={onNavLinkClick.bind(this, '/wishList')}>
        <i className='material-icons'>favorite_border</i>
        <span>My Wish List</span>
      </li>
      <li onClick={onNavLinkClick.bind(this, '/myCart')}>
        <i className='material-icons'>work_outline</i>
        <span>My Cart</span>
      </li>
    </ul>
  );
};

export default CartWihsListLinks;
