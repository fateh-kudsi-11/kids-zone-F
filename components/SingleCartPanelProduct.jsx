// Styles
import styles from '../styles/SingleCartPanelProduct.module.scss';
const { cartPanelProductsInfo } = styles;

// Hooks
import { useEffect, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

//Redux
import { deleteProductFromCart } from '../redux/actions/cart';

const SingleCartPanelProduct = ({
  images,
  productName,
  selectedSize,
  selectedColor,
  productId
}) => {
  const dispatch = useDispatch();
  const [imageIndex, setImageIndex] = useState(0);
  const onDeleteClick = (e) => {
    e.stopPropagation();
    dispatch(deleteProductFromCart(productId));
  };

  const setImageIndexOnLoad = useCallback(() => {
    if (images.length === 1) {
      return;
    }
    const image = images.findIndex((x) => x.imagesColor === selectedColor);
    setImageIndex(image);
  }, [selectedColor, images]);

  useEffect(() => {
    setImageIndexOnLoad();
  }, [setImageIndexOnLoad]);
  return (
    <li>
      <img src={images[imageIndex].images[0]} alt={productName} />
      <div className={cartPanelProductsInfo}>
        <p>{productName}</p>
        <p>Size: {selectedSize}</p>
        <p>Color: {selectedColor}</p>
      </div>
      <button onClick={onDeleteClick}>
        <i className='material-icons'>delete</i>
      </button>
    </li>
  );
};

export default SingleCartPanelProduct;
