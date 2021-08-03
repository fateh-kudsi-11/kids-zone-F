import '../styles/globals.scss';

//Layout
import Navbar from '../layout/Navbar';
import FilterNav from '../layout/FilterNav';
import Footer from '../layout/Footer';
import Alerts from '../layout/Alerts';
import NavbarAndFilter from '../components/NavbarAndFilter';

// Redux
import { Provider } from 'react-redux';
import store from '../redux/store';

// Hooks
import { useEffect } from 'react';

// Redux - actions
import { loadUser } from '../redux/actions/auth';
import { SET_TOKEN, SET_GENDER_FIRST_LOAD } from '../redux/types';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      store.dispatch({
        type: SET_TOKEN,
        payload: localStorage.getItem('token')
      });
      if (localStorage.getItem('gender')) {
        store.dispatch({
          type: SET_GENDER_FIRST_LOAD,
          payload: localStorage.getItem('gender')
        });
      } else {
        store.dispatch({
          type: SET_GENDER_FIRST_LOAD,
          payload: 'boys'
        });
      }
    }
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <>
        <NavbarAndFilter />
        <Alerts />
        <Component {...pageProps} />
        <Footer />
      </>
    </Provider>
  );
}

export default MyApp;
