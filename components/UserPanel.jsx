// Styles
import styles from '../styles/UserPanel.module.scss';
const { userPanelContainer, userLinks, loginButton, registerButton } = styles;

// Hooks
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

// Redux - actions
import { logout } from '../redux/actions/auth';

const UserPanel = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, isAuth } = useSelector((state) => state.auth);

  let title = '';
  let firstName = '';
  let lastName = '';

  if (user) {
    title = user.data.title;
    firstName = user.data.firstName;
    lastName = user.data.lastName;
  }

  const onLinkClick = (page, e) => {
    router.push(`/${page}`);
  };

  const logOutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className={userPanelContainer}>
      {isAuth ? (
        <>
          <p>
            {title && title.toUpperCase()} {'.'} {firstName.toUpperCase()}
            {'   '}
            {lastName.toUpperCase()}
          </p>
          <div className={userLinks}>
            <button className={loginButton} onClick={logOutHandler}>
              LOGOUT
            </button>
            <button
              className={registerButton}
              onClick={onLinkClick.bind(this, 'myAccount')}
            >
              MY ACCOUNT
            </button>
          </div>
        </>
      ) : (
        <>
          <p>LOGIN / REGISTER</p>
          <div className={userLinks}>
            <button
              className={loginButton}
              onClick={onLinkClick.bind(this, 'login')}
            >
              LOGIN
            </button>
            <button
              className={registerButton}
              onClick={onLinkClick.bind(this, 'createAccount')}
            >
              REGISTER
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserPanel;
