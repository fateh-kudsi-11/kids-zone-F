// Styles
import styles from '../styles/ProductDescription.module.scss';
const { productDescriptionContainer } = styles;
// Hooks
import { useSelector } from 'react-redux';

const ProductDescription = () => {
  const description = useSelector(
    (state) => state.products.product.description
  );

  if (typeof description === 'undefined') {
    return null;
  }
  return (
    <div className={productDescriptionContainer}>
      <h1>PRODUCT DESCRIPTION</h1>
      <p>{description}</p>
    </div>
  );
};

export default ProductDescription;
