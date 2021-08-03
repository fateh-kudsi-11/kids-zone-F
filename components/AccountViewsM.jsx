// Styles
import styles from '../styles/AccountViewsM.module.scss';
const {
  myAccountContainer,
  sideNavbar,
  sideNavbarTitle,
  titleWelcome,
  titleName,
  titleCircle,
  titleLetters,
  sideNavbarLinks,
  sideNavbarIcon,
  sideNavbarLinkText,
  accountDe,
  active
} = styles;

// Hooks
import { useSelector, useDispatch } from 'react-redux';

// Redux - action
import { logout } from '../redux/actions/auth';

// Utils
import userIconUtils from '../utils/userIcon';

// Components
import MyOrder from '../components/MyOrder';
import MyDetails from '../components/MyDetails';
import ChangePassword from '../components/ChangePassword';
import AdressBook from '../components/AdressBook';
import DefaultView from '../components/DefaultView';

const AccountViewsM = ({ view, setView }) => {
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

  let activeView;

  switch (view) {
    case 'my-order':
      activeView = <MyOrder setView={setView} />;
      break;
    case 'my-details':
      activeView = <MyDetails setView={setView} />;
      break;
    case 'change-password':
      activeView = <ChangePassword setView={setView} />;
      break;
    case 'adress-book':
      activeView = <AdressBook setView={setView} />;
      break;
    default:
      activeView = <DefaultView />;
      break;
  }

  const viewHandler = (x) => {
    setView(x);
  };

  const onLogOutClick = () => {
    dispatch(logout());
  };
  return (
    <section className={myAccountContainer}>
      <div className={sideNavbar}>
        <div className={sideNavbarTitle}>
          <p className={titleWelcome}>Welcome</p>
          <p className={titleName}>{`${title && title}. ${firstName}`}</p>
          <div className={titleCircle}>
            <p className={titleLetters}>{userIconUtils(firstName, lastName)}</p>
          </div>
        </div>
        <ul className={sideNavbarLinks}>
          <li
            onClick={viewHandler.bind(this, 'my-order')}
            className={`${view === 'my-order' ? active : null}`}
          >
            <i className={`material-icons ${sideNavbarIcon}`}>card_travel</i>
            <span className={sideNavbarLinkText}>My Orders</span>
          </li>
          <li
            onClick={viewHandler.bind(this, 'my-details')}
            className={`${view === 'my-details' ? active : null}`}
          >
            <i className={`material-icons ${sideNavbarIcon}`}>account_box</i>
            <span className={sideNavbarLinkText}>My Details</span>
          </li>
          <li
            onClick={viewHandler.bind(this, 'change-password')}
            className={`${view === 'change-password' ? active : null}`}
          >
            <i className={`material-icons ${sideNavbarIcon}`}>lock_outline</i>
            <span className={sideNavbarLinkText}>Change Password</span>
          </li>
          <li
            onClick={viewHandler.bind(this, 'adress-book')}
            className={`${view === 'adress-book' ? active : null}`}
          >
            <i className={`material-icons ${sideNavbarIcon}`}>add_business</i>
            <span className={sideNavbarLinkText}>Adress Book</span>
          </li>
          <li onClick={onLogOutClick}>
            <i className={`material-icons ${sideNavbarIcon}`}>logout</i>
            <span className={sideNavbarLinkText}>Log Out</span>
          </li>
        </ul>
      </div>
      <div className={accountDe}>{activeView}</div>
    </section>
  );
};

export default AccountViewsM;
