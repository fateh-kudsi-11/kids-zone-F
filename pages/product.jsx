// Styles
import styles from '../styles/ProductsPage.module.scss';
const { productPageContainer, productPageImagesInfoContainer } = styles;

// Hooks
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useCallback } from 'react';

// Components
import Spinner from '../layout/Spinner';
import ProductImages from '../components/ProductImages';
import ProductInfo from '../components/ProductInfo';
import ProductDescriptionDetails from '../components/ProductDescriptionDetails';
import SimilarProducts from '../components/SimilarProducts';

// redux - action
import { setProduct, setProductImages } from '../redux/actions/products';

const product = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const { loading, product, productColor } = products;
  const isNavbarPanelOpen = useSelector(
    (state) => state.navbarPanel.isNavbarPanelOpen
  );

  const setProductsImagesPage = useCallback(() => {
    if (loading || Object.keys(product).length === 0) {
      return null;
    } else {
      if (productColor !== '') {
        const imageIndex = product.images.findIndex((image) => {
          return image.imagesColor === productColor;
        });
        dispatch(setProductImages(product.images[imageIndex]));
      } else {
        dispatch(setProductImages(product.images[0]));
      }
    }
  }, [loading, product, setProductImages, productColor]);

  useEffect(() => {
    if (Object.keys(product).length === 0 && router.query.id !== undefined) {
      dispatch(setProduct(router.query.id));
    }
    setProductsImagesPage();
  }, [product, setProduct, router.query.id]);

  if (isNavbarPanelOpen) return null;

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className={productPageContainer}>
          <main className={productPageImagesInfoContainer}>
            <ProductImages />
            <ProductInfo />
          </main>
          <ProductDescriptionDetails />
          <SimilarProducts />
        </section>
      )}
    </>
  );
};

export default product;
