// Styles
import styles from '../styles/ProductDetails.module.scss';
const { productDetailsContainer } = styles;
// Hooks
import { useSelector } from 'react-redux';

const ProductDetails = () => {
  const details = useSelector((state) => state.products.product.details);

  if (typeof details === 'undefined') {
    return null;
  }
  return (
    <div className={productDetailsContainer}>
      <h1>PRODUCT DETAILS</h1>
      <ul>
        {details.map((d, index) => (
          <li key={index}>{d}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetails;
