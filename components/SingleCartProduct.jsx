// Styles
import styles from '../styles/SingleCartProduct.module.scss';
const {
  singleCartProductContainer,
  productCartInfo,
  priceClass,
  productNameClass,
  marginNone,
  deleteProductClass
} = styles;

// Hooks
import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redex - actions

import {
  deleteProductFromCart,
  updateCartProduct
} from '../redux/actions/cart';
import { updateProductToWishList } from '../redux/actions/auth';

const SingleCartProduct = (props) => {
  const dispatch = useDispatch();
  const {
    images,
    productName,
    price,
    colors,
    sizes,
    selectedColor,
    selectedSize,
    qty,
    productId
  } = props;

  const [formData, setFormData] = useState({
    color: selectedColor,
    size: selectedSize,
    selectQty: qty
  });

  const [imageIndex, setImageIndex] = useState(0);

  const wishListIds = useSelector((state) => state.auth.wishListIds);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCartProduct(formData, productId));
  };

  const onClearButtonClick = () => {
    dispatch(deleteProductFromCart(productId));
  };

  const setImageIndexOnLoad = useCallback(() => {
    if (images.length === 1) {
      return;
    }
    const image = images.findIndex((x) => x.imagesColor === formData.color);
    setImageIndex(image);
  }, [images, formData]);

  useEffect(() => {
    setImageIndexOnLoad();
  }, [setImageIndexOnLoad]);

  const onSaveForLaterClick = async () => {
    const isProductInWishList = wishListIds.findIndex((x) => x === productId);
    if (isProductInWishList === -1) {
      await dispatch(updateProductToWishList(productId));
    }
    dispatch(deleteProductFromCart(productId));
  };

  const updateButton = () => {
    if (
      formData.color !== selectedColor ||
      formData.size !== selectedSize ||
      formData.selectQty !== qty
    ) {
      return <button>UPDATE CHANGE</button>;
    } else {
      return null;
    }
  };
  return (
    <li className={singleCartProductContainer}>
      <img src={images[imageIndex].images[0]} alt={productName} />
      <div className={productCartInfo}>
        <p className={priceClass}>{price / 1000}$</p>
        <p className={productNameClass}>{productName}</p>
        <form onSubmit={onSubmit}>
          <select name='color' value={formData.color} onChange={onChange}>
            {colors.map((color) => (
              <option value={color.colorName} key={color._id}>
                {color.colorName}
              </option>
            ))}
          </select>
          <select name='size' value={formData.size} onChange={onChange}>
            {sizes.map((size, index) => (
              <option value={size} key={index}>
                {size}
              </option>
            ))}
          </select>
          <select
            name='selectQty'
            className={marginNone}
            value={formData.selectQty}
            onChange={onChange}
          >
            <option value='1'>Qty: 1</option>
            <option value='2'>Qty: 2</option>
            <option value='3'>Qty: 3</option>
            <option value='4'>Qty: 4</option>
            <option value='5'>Qty: 5</option>
            <option value='6'>Qty: 6</option>
            <option value='7'>Qty: 7</option>
            <option value='8'>Qty: 8</option>
            <option value='9'>Qty: 9</option>
            <option value='10'>Qty: 10</option>
          </select>
          {updateButton()}
        </form>

        <button onClick={onSaveForLaterClick}>SAVE FOR LATER</button>
      </div>
      <button className={deleteProductClass} onClick={onClearButtonClick}>
        <i className='material-icons'>clear</i>
      </button>
    </li>
  );
};

export default SingleCartProduct;
