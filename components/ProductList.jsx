// Styles
import styles from '../styles/ProductList.module.scss';
const { productsContainer, productList } = styles;

// Components
import SingleProduct from './SingleProduct';

// Hooks
import { useSelector } from 'react-redux';

const ProductList = () => {
  const products = useSelector((state) => state.products.products);

  const isNavbarPanelOpen = useSelector(
    (state) => state.navbarPanel.isNavbarPanelOpen
  );

  if (isNavbarPanelOpen) return null;

  return (
    <div className={productsContainer}>
      <p>
        <span>({products.length})</span> Products Found
      </p>
      <ul className={productList}>
        {products &&
          products.map((product) => (
            <SingleProduct {...product} key={product._id} wishList={false} />
          ))}
      </ul>
    </div>
  );
};

export default ProductList;
