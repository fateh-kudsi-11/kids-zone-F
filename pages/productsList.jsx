// Components
import ProductFilters from '../components/ProductFilters';
import ProductList from '../components/ProductList';
import Spinner from '../layout/Spinner';

// Hooks
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux - Actions
import { setProducts } from '../redux/actions/products';
import { clearDirectory } from '../redux/actions/navigation';

const productsListPage = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const directory = useSelector((state) => state.navigation.directory);

  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    if (!directory) {
      router.push('/');
    } else {
      dispatch(setProducts());
    }
  }, [directory]);

  useEffect(() => {
    return () => {
      dispatch(clearDirectory());
    };
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section>
          <ProductFilters />
          <ProductList />
        </section>
      )}
    </>
  );
};

export default productsListPage;
