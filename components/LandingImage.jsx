// React - Hooks
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

// Redux - Actions
import { setDirectory } from '../redux/actions/navigation';

// Styles - SCSS
import styles from '../styles/LandingImage.module.scss';
const {
  landingContainer,
  backgroundPosition,
  bgOneClass,
  landingText,
  landingButton,
  changeBg,
  checkMarkContainer,
  checkmark,
  showBgOne,
  bgTwoClass,
  showBgTwo
} = styles;

const LandingImage = ({ backgroundImages: { bgOneInfo, bgTwoInfo } }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  // State
  const [bgOne, setBgOne] = useState(true);
  const [bgTwo, setBgTwo] = useState(false);

  const setBackgroundOne = () => {
    setBgOne(true);
    setBgTwo(false);
  };
  const setBackgroundTwo = () => {
    setBgOne(false);
    setBgTwo(true);
  };

  const {
    firstLine,
    secondLine,
    thirdLine,
    callToActionText,
    bgImage,
    bgDirectory
  } = bgOneInfo;

  const onLandingButtonClick = (x, e) => {
    dispatch(setDirectory(x));
    router.push('/productsList');
  };

  return (
    <section className={landingContainer}>
      <div className={backgroundPosition}>
        <div
          className={`${bgOneClass} ${bgOne ? showBgOne : showBgTwo}`}
          style={{
            background: `url(${bgImage}) no-repeat center center/cover`
          }}
        >
          <div>
            <p className={landingText}>{firstLine}</p>
            <p className={landingText}>{secondLine}</p>
            {thirdLine && <p className={landingText}>{thirdLine}</p>}

            <button
              className={landingButton}
              onClick={onLandingButtonClick.bind(this, bgDirectory)}
            >
              {callToActionText}
            </button>
          </div>
        </div>
      </div>
      {bgTwoInfo && (
        <div className={backgroundPosition}>
          <div
            className={`${bgTwoClass} ${bgTwo ? showBgTwo : showBgOne}`}
            style={{
              background: `url(${bgTwoInfo.bgImage}) no-repeat center center/cover`
            }}
          >
            <div>
              <p className={landingText}>{bgTwoInfo.firstLine}</p>
              <p className={landingText}>{bgTwoInfo.secondLine}</p>
              <p className={landingText}>{bgTwoInfo.thirdLine}</p>
              <button
                className={landingButton}
                onClick={onLandingButtonClick.bind(this, bgTwoInfo.bgDirectory)}
              >
                {bgTwoInfo.callToActionText}
              </button>
            </div>
          </div>
        </div>
      )}
      {bgTwoInfo && (
        <div className={changeBg}>
          <label className={checkMarkContainer}>
            <input
              type='radio'
              checked={bgOne}
              name='bgOne'
              onChange={setBackgroundOne}
            />
            <span className={checkmark}></span>
          </label>
          <label className={checkMarkContainer}>
            <input
              type='radio'
              name='bgTwo'
              checked={bgTwo}
              onChange={setBackgroundTwo}
            />
            <span className={checkmark}></span>
          </label>
        </div>
      )}
    </section>
  );
};

export default LandingImage;
