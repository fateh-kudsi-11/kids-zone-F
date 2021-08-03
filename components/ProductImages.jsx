// Styles
import styles from '../styles/ProductImages.module.scss';
const {
  productImagesContainer,
  imagesLabel,
  active,
  mainImagesContainer,
  mainImagesClass,
  mainImagesButtons,
  cursor,
  prevImage,
  nextImage,
  activeImg,
  marginBottom,
  lens
} = styles;

// Hooks
import { useState, useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux - Actions
import {
  setImagePosition,
  setShowLens,
  setImageIndex,
  clearImagePosition
} from '../redux/actions/imageZoom';

const ProductImages = () => {
  const showLens = useSelector((state) => state.imageZoom.showLens);
  const productImages = useSelector((state) => state.products.productImages);

  const dispatch = useDispatch();
  const [imageDisplay, setImageDisplay] = useState(1);
  const [images, setImages] = useState([]);
  const [lensPo, setLensPo] = useState({ x: 0, y: 0 });

  const setActiveImages = useCallback(() => {
    if (Object.keys(productImages).length === 0) {
      return null;
    } else {
      setImages(productImages.images);
    }
  }, [setImages, productImages]);

  useEffect(() => {
    setActiveImages();
  });

  useEffect(() => {
    return () => {
      dispatch(clearImagePosition());
      dispatch(setImageIndex(0));
    };
  }, [clearImagePosition, setImageIndex]);

  const mainImages = useRef();

  const onNextClick = (e) => {
    if (images.length === 2 && imageDisplay === 2) {
      dispatch(setImageIndex(1));
      return setImageDisplay(1);
    }

    if (imageDisplay === 3) {
      dispatch(setImageIndex(1));
      return setImageDisplay(1);
    }
    setImageDisplay(imageDisplay + 1);
    dispatch(setImageIndex(imageDisplay + 1));
  };

  const onPrevClick = (e) => {
    if (images.length === 2 && imageDisplay === 1) {
      dispatch(setImageIndex(2));
      return setImageDisplay(2);
    }
    if (imageDisplay === 1) {
      dispatch(setImageIndex(3));
      return setImageDisplay(3);
    }
    dispatch(setImageIndex(imageDisplay - 1));
    setImageDisplay(imageDisplay - 1);
  };

  const setImage = (imageNum, e) => {
    dispatch(setImageIndex(imageNum));
    setImageDisplay(imageNum);
  };

  const imageZoom = (e) => {
    const a = mainImages.current.getBoundingClientRect();

    let x = e.clientX - a.left - 20;
    let y = e.clientY - a.top - 20;

    setLensPo({ x, y });
    if (showLens) {
      dispatch(setImagePosition({ x, y }));
    }
  };

  const onMainImageClick = () => {
    if (!showLens) {
      dispatch(setImagePosition({ x, y }));
    }
    dispatch(setShowLens());
  };

  const onImagesButtonsMouseEnter = () => {
    if (showLens) {
      dispatch(setShowLens());
    }
  };

  const { x, y } = lensPo;

  return (
    <div className={productImagesContainer}>
      <div className={imagesLabel}>
        <div
          className={`${imageDisplay === 1 && active} ${marginBottom}`}
          onClick={setImage.bind(this, 1)}
        >
          <img src={images[0]} alt='first product image' />
        </div>
        <div
          className={`${imageDisplay === 2 && active} ${marginBottom}`}
          onClick={setImage.bind(this, 2)}
        >
          <img src={images[1]} alt='second  product image' />
        </div>
        {images[2] && (
          <div
            className={`${imageDisplay === 3 && active}`}
            onClick={setImage.bind(this, 3)}
          >
            <img src={images[2]} alt='third  product image' />
          </div>
        )}
      </div>
      <div className={mainImagesContainer}>
        <div
          className={`${mainImagesClass} ${!showLens && cursor}`}
          onTouchMove={imageZoom}
          onMouseMove={imageZoom}
          ref={mainImages}
          onClick={onMainImageClick}
        >
          <img
            src={images[0]}
            alt='first product image'
            className={`${imageDisplay === 1 && activeImg}`}
          />
          <img
            src={images[1]}
            alt='second  product image'
            className={`${imageDisplay === 2 && activeImg}`}
          />
          {images[2] && (
            <img
              src={images[2]}
              alt='third  product image'
              className={`${imageDisplay === 3 && activeImg}`}
            />
          )}

          {showLens && (
            <div
              className={lens}
              style={{
                top: `${y}px`,
                left: `${x}px`
              }}
            ></div>
          )}
        </div>
        <div className={mainImagesButtons}>
          <button
            className={prevImage}
            onClick={onPrevClick}
            onMouseEnter={onImagesButtonsMouseEnter}
          >
            <i className='material-icons'>arrow_back_ios</i>
          </button>
          <button
            className={nextImage}
            onClick={onNextClick}
            onMouseEnter={onImagesButtonsMouseEnter}
          >
            <i className='material-icons'>arrow_forward_ios</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
