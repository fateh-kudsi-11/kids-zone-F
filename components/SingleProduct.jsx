// Styles
import Styles from '../styles/SingleProduct.module.scss';
const {
  productContainer,
  productNameClass,
  productBrandClass,
  priceClass,
  priceAndColor,
  addToWishList,
  colorsClass,
  colorClass,
  active,
  wishListProduct
} = Styles;

// Hooks
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

// Redux - actions
import { setProduct, setProductColor } from '../redux/actions/products';
import { updateProductToWishList } from '../redux/actions/auth';
import { setProductWishList } from '../redux/actions/wishList';
import { setAlert } from '../redux/actions/alerts';

// Components
import WishListProductsInputs from './WishListProductsInputs';

const SingleProduct = ({
  images,
  productName,
  brand,
  colors,
  price,
  _id,
  size,
  wishList
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { wishListIds, isAuth } = useSelector((state) => state.auth);

  const [imageIndex, setImageIndex] = useState(0);
  const [activeColorName, setActiveColorName] = useState('');
  const [isProductInWishList, setIsProductInWishList] = useState(false);

  const setActiveColorNameOnFirstLoad = useCallback(() => {
    const activeColor = images[imageIndex].imagesColor;
    setActiveColorName(activeColor);
  }, [images, imageIndex]);

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
    setActiveColorNameOnFirstLoad();
    checkProductInWishList();
  }, [setActiveColorNameOnFirstLoad, checkProductInWishList]);

  const onColorClick = (colorName, e) => {
    e.stopPropagation();
    const colorImageIndex = images.findIndex(
      (image) => image.imagesColor === colorName
    );

    setImageIndex(colorImageIndex);
    setActiveColorName(colorName);
  };

  const onProductClick = () => {
    dispatch(setProduct(_id));
    const urlProductName = productName.split(' ').join('-');
    dispatch(setProductColor(activeColorName));
    router.push(`/product?productName=${urlProductName}&id=${_id}`);
  };

  const onWishListClick = async (e) => {
    e.stopPropagation();
    if (!isAuth) {
      dispatch(setAlert('Faild', 'You Must Login First', 'danger'));
    }
    await dispatch(updateProductToWishList(_id));
    if (wishList) {
      dispatch(setProductWishList());
    }
  };

  return (
    <li
      className={`${productContainer} ${wishList ? wishListProduct : ''}`}
      onClick={onProductClick}
    >
      <img src={`${images[imageIndex].images[0]}`} alt={`${productName}`} />
      <p className={productNameClass}>{productName}</p>
      <p className={productBrandClass}>{brand}</p>
      <div className={priceAndColor}>
        <div className={addToWishList} onClick={onWishListClick}>
          <i className='material-icons'>
            {' '}
            {isProductInWishList ? 'favorite' : 'favorite_border'}
          </i>
        </div>
        <ul className={colorsClass}>
          {colors.map((color) => (
            <li
              key={color._id}
              onClick={onColorClick.bind(this, color.colorName)}
              className={`${
                activeColorName === color.colorName ? active : ''
              } ${colorClass}`}
              style={{ background: `${color.colorCode}` }}
            ></li>
          ))}
        </ul>
        <p className={priceClass}>$ {price / 1000}</p>
      </div>
      {wishList && (
        <WishListProductsInputs sizes={size} id={_id} color={activeColorName} />
      )}
    </li>
  );
};

export default SingleProduct;
