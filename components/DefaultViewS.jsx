// Styles
import styles from '../styles/DefaultViewS.module.scss';
const {
  defaultViewsSContainer,
  headerViews,
  titleCircle,
  titleLetters,
  welcomeAndName,
  titleWelcome,
  titleName,
  sideNavbarLinks,
  sideNavbarIcon,
  sideNavbarLinkText
} = styles;

// Redux - action
import { logout } from '../redux/actions/auth';

// Hooks
import { useDispatch, useSelector } from 'react-redux';

// Utils
import userIconUtils from '../utils/userIcon';

const DefaultViewS = ({ setView }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  let firstName;
  let lastName;

  let title;
  if (user) {
    firstName = user.data.firstName;
    lastName = user.data.lastName;

    title = user.data.title ? user.data.title : null;
  }

  const viewHandler = (x) => {
    setView(x);
  };

  const onLogOutClick = () => {
    dispatch(logout());
  };
  return (
    <div className={defaultViewsSContainer}>
      <div className={headerViews}>
        <div className={titleCircle}>
          <p className={titleLetters}>{userIconUtils(firstName, lastName)}</p>
        </div>
        <div className={welcomeAndName}>
          <p className={titleWelcome}>Welcome ,</p>
          <p className={titleName}>{`${title && title}. ${firstName}`}</p>
        </div>
      </div>
      <ul className={sideNavbarLinks}>
        <li onClick={viewHandler.bind(this, 'my-order')}>
          <i className={`material-icons ${sideNavbarIcon}`}>card_travel</i>
          <span className={sideNavbarLinkText}>My Orders</span>
        </li>
        <li onClick={viewHandler.bind(this, 'my-details')}>
          <i className={`material-icons ${sideNavbarIcon}`}>account_box</i>
          <span className={sideNavbarLinkText}>My Details</span>
        </li>
        <li onClick={viewHandler.bind(this, 'change-password')}>
          <i className={`material-icons ${sideNavbarIcon}`}>lock_outline</i>
          <span className={sideNavbarLinkText}>Change Password</span>
        </li>
        <li onClick={viewHandler.bind(this, 'adress-book')}>
          <i className={`material-icons ${sideNavbarIcon}`}>add_business</i>
          <span className={sideNavbarLinkText}>Adress Book</span>
        </li>
        <li onClick={onLogOutClick}>
          <i className={`material-icons ${sideNavbarIcon}`}>logout</i>
          <span className={sideNavbarLinkText}>Log Out</span>
        </li>
      </ul>
    </div>
  );
};

export default DefaultViewS;
