// COMPONENTS
import LandingImage from '../components/LandingImage';
import Discount from '../components/Discount';
import Brands from '../components/Brands';

const grils = () => {
  const backgroundImages = {
    bgOneInfo: {
      firstLine: `LET'S`,
      secondLine: `PREPARE TO`,
      thirdLine: `BACK TO SCHOOL`,
      callToActionText: `CHECK OUT NEW SCHOOL COLLECTION`,
      bgImage: '/images/test501.jpg',
      bgDirectory: 'activewear'
    },
    bgTwoInfo: {
      firstLine: `AUTUMN`,
      secondLine: `HAS`,
      thirdLine: `ARRIVED`,
      callToActionText: `CHECK OUT NEW AUTUMN COLLECTION`,
      bgImage: '/images/test504.jpg',
      bgDirectory: 'jackets'
    }
  };
  return (
    <div>
      <LandingImage backgroundImages={backgroundImages} />
      <Discount />
      <Brands />
    </div>
  );
};

export default grils;
