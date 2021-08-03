// Styles
import styles from '../styles/WishList.module.scss';
const { wishListContainer } = styles;
// Hooks
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

// Redux - Actions
import { setProductWishList } from '../redux/actions/wishList';
import { setAlert } from '../redux/actions/alerts';

// Layout
import Spinner from '../layout/Spinner';

// Components
import EmptyWishList from '../components/EmptyWishList';
import WishListProductsList from '../components/wishListProductsList';

const wishList = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuth, loading } = useSelector((state) => state.auth);
  const wishLoading = useSelector((state) => state.wishList.loading);

  const products = useSelector((state) => state.wishList.wishListProduct);

  const isNavbarPanelOpen = useSelector(
    (state) => state.navbarPanel.isNavbarPanelOpen
  );

  const setProduct = useCallback(() => {
    if (!isAuth || loading) {
      return;
    } else {
      dispatch(setProductWishList());
    }
  }, [isAuth, loading, setProductWishList]);

  useEffect(() => {
    setProduct();
  }, [setProduct]);

  if (isNavbarPanelOpen) {
    return null;
  }

  if (!isAuth) {
    if (typeof window !== 'undefined') {
      router.push('/login');
    }
  }

  return (
    <>
      {loading || wishLoading ? (
        <Spinner />
      ) : (
        <section className={wishListContainer}>
          {products.length === 0 ? <EmptyWishList /> : <WishListProductsList />}
        </section>
      )}
    </>
  );
};

export default wishList;
