// Styles
import styles from '../styles/ProductInfoText.module.scss';
const {
  infoContainer,
  colorInfo,
  fontWeight,
  sizeLabel,
  colorsInfoContianer,
  active,
  productInfoActions,
  formGroup
} = styles;

// Hooks
import { useSelector, useDispatch } from 'react-redux';
import { useState, useCallback, useEffect } from 'react';

// Redux - actions
import {
  setProductImagesColor,
  setProductColor
} from '../redux/actions/products';
import { updateProductToWishList } from '../redux/actions/auth';
import { addProductToCart } from '../redux/actions/cart';
import { setAlert } from '../redux/actions/alerts';

const ProductInfoText = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const { isAuth, wishListIds } = useSelector((state) => state.auth);
  const { product, productColor } = products;
  const [selectedSize, setSelectedSize] = useState('');
  const [isProductInWishList, setIsProductInWishList] = useState(false);
  const { productName, brand, price, colors, size, _id } = product;

  const checkProductInWishList = useCallback(() => {
    if (!isAuth) {
      return;
    }

    const isEx = wishListIds.findIndex((x) => x === _id);
    if (isEx === -1) {
      setIsProductInWishList(false);
    } else {
      setIsProductInWishList(true);
    }
  }, [wishListIds, _id, setIsProductInWishList, isAuth]);

  useEffect(() => {
    checkProductInWishList();
  }, [checkProductInWishList]);

  const onAddToWishListClick = () => {
    if (!isAuth) {
      dispatch(
        setAlert(
          'Sign In Is Required',
          'You Must Sign in First To Add This Product To Your Wish List ',
          'danger'
        )
      );
      return;
    } else {
      dispatch(updateProductToWishList(_id));
    }
  };

  const onAddToCartClick = () => {
    if (!isAuth) {
      dispatch(
        setAlert(
          'Sign In Is Required',
          'You Must Sign in First To Add This Product To Your Cart ',
          'danger'
        )
      );
      return;
    }
    if (selectedSize === '') {
      dispatch(
        setAlert(
          'SIZe Is Required',
          'You Must Pick Product Size First',
          'danger'
        )
      );
      return;
    }
    dispatch(addProductToCart(_id, productColor, selectedSize));
  };

  const onSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const onColorClick = (colorName, e) => {
    dispatch(setProductColor(colorName));
    dispatch(setProductImagesColor(colorName));
  };

  return (
    <div className={infoContainer}>
      <p>{productName}</p>
      <p className={fontWeight}>{brand}</p>
      <p className={fontWeight}>$ {price / 1000}</p>
      <div className={colorInfo}>
        <span> Color:</span>
        <div className={colorsInfoContianer}>
          {colors.map((color) => (
            <div
              style={{ backgroundColor: `${color.colorCode}` }}
              key={color._id}
              onClick={onColorClick.bind(this, color.colorName)}
              className={productColor === color.colorName ? active : ''}
            ></div>
          ))}
        </div>
      </div>
      <div className={`${formGroup} `}>
        <label htmlFor='title' className={sizeLabel}>
          Size:
        </label>
        <select
          name='title'
          id='title'
          onChange={onSizeChange}
          value={selectedSize}
        >
          <option value=''>Please Select</option>
          {size.map((s, index) => (
            <option value={s} key={index}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className={productInfoActions}>
        <button onClick={onAddToCartClick}>ADD TO CART</button>
        <div onClick={onAddToWishListClick}>
          <i className='material-icons'>
            {isProductInWishList ? 'favorite' : 'favorite_border'}
          </i>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoText;
