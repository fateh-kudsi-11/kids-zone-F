// Styles
import style from '../styles/ProductDescriptionDetails.module.scss';
const { descriptionAndDetailsContainer } = style;

// Components
import ProductDescription from './ProductDescription';
import ProductDetails from './ProductDetails';

const ProductDescriptionDetails = () => {
  return (
    <section className={descriptionAndDetailsContainer}>
      <ProductDescription />
      <ProductDetails />
    </section>
  );
};

export default ProductDescriptionDetails;
