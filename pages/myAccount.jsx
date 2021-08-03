// Hooks
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

// Redux - action
import { setAlert } from '../redux/actions/alerts';

// Layout
import Spinner from '../layout/Spinner';
import Redirect from '../layout/RedirectTo';

// Components
import AccountViewsM from '../components/AccountViewsM';
import AccountViewsS from '../components/AccountViewsS';

const myAccount = () => {
  const { isAuth, loading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [view, setView] = useState('');

  if (!isAuth && !loading) {
    dispatch(
      setAlert(
        'Login is Required',
        'you must be logged in to access this page.',
        'danger'
      )
    );

    return <Redirect path='login' />;
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <AccountViewsM view={view} setView={setView} />
          <AccountViewsS view={view} setView={setView} />
        </>
      )}
    </>
  );
};

export default myAccount;
