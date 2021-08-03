// Styles
import styles from '../styles/SimilarProducts.module.scss';
const { similarProductsClass, productList, productListOverflow } = styles;
// Hooks
import { useSelector } from 'react-redux';

// Components
import SingleProduct from './SingleProduct';

const SimilarProducts = () => {
  const similarProductsArr = useSelector(
    (state) => state.products.similarProducts
  );
  return (
    <div className={similarProductsClass}>
      <h1>YOU MIGHT ALSO LIKE</h1>
      <div className={productListOverflow}>
        <ul className={productList}>
          {similarProductsArr &&
            similarProductsArr.map((product) => (
              <SingleProduct {...product} key={product._id} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SimilarProducts;
