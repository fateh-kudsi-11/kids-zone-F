// Styles
import styles from '../styles/AuthLinks.module.scss';
const { authLinksContainer, divider } = styles;

// Hooks
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

// Redux - action
import { logout } from '../redux/actions/auth';
import { setNav } from '../redux/actions/navbarPanel';

const AuthLinks = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.auth);

  let title;
  let firstName;
  let lastName;

  if (user) {
    title = user.data.title;
    firstName = user.data.firstName;
    lastName = user.data.lastName;
  }

  const onLinkClick = (link) => {
    router.push(`/${link}`);
    dispatch(setNav(false));
  };

  const logOutHandler = () => {
    dispatch(logout());
    dispatch(setNav(false));
  };

  return (
    <div className={authLinksContainer}>
      {isAuth ? (
        <>
          <p>
            {title && title.toUpperCase()}. {firstName} {lastName}
          </p>
          <div className={divider} />
          <button onClick={logOutHandler}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={onLinkClick.bind(this, 'login')}>Login</button>
          <div className={divider} />
          <button onClick={onLinkClick.bind(this, 'createAccount')}>
            Register
          </button>
        </>
      )}
    </div>
  );
};

export default AuthLinks;
