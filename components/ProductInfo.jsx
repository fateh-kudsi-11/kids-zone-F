// Styles
import styles from '../styles/ProductInfo.module.scss';
const { productInfoContainer, imageZoomClass } = styles;

// Hooks
import { useSelector } from 'react-redux';

// Components
import ProductInfoText from './ProductInfoText';

const ProductInfo = () => {
  const imageZoom = useSelector((state) => state.imageZoom);
  const productImages = useSelector((state) => state.products.productImages);
  const { x, y, showLens, imageIndex } = imageZoom;

  if (Object.keys(productImages).length === 0) {
    return null;
  }
  const imageIndexDisplay = imageIndex === 0 ? 1 : imageIndex;
  return (
    <div className={productInfoContainer}>
      {showLens && (
        <div
          className={imageZoomClass}
          style={{
            backgroundImage: `url(${
              productImages.images[imageIndexDisplay - 1]
            })`,
            backgroundPosition: `-${x * 7.625 - 300}px -${y * 9.5}px`
          }}
        ></div>
      )}
      <ProductInfoText />
    </div>
  );
};

export default ProductInfo;
