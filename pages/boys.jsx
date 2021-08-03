// Components
import LandingImage from '../components/LandingImage';
import Discount from '../components/Discount';
import Brands from '../components/Brands';
const boys = () => {
  const backgroundImages = {
    bgOneInfo: {
      firstLine: `LET'S`,
      secondLine: `PREPARE TO`,
      thirdLine: `BACK TO SCHOOL`,
      callToActionText: `CHECK OUT NEW SCHOOL COLLECTION`,
      bgImage: '/images/test502.jpg',
      bgDirectory: 'activewear'
    },
    bgTwoInfo: {
      firstLine: `AUTUMN`,
      secondLine: `HAS`,
      thirdLine: `ARRIVED`,
      callToActionText: `CHECK OUT NEW AUTUMN COLLECTION`,
      bgImage: '/images/test505.jpg',
      bgDirectory: 'jackets'
    }
  };
  return (
    <>
      <LandingImage backgroundImages={backgroundImages} />
      <Discount />
      <Brands />
    </>
  );
};

export default boys;
