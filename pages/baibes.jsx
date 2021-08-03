// COMPONENTS
import LandingImage from '../components/LandingImage';
import Discount from '../components/Discount';
import Brands from '../components/Brands';

const baybes = () => {
  const backgroundImages = {
    bgOneInfo: {
      firstLine: `COSY JACKETS  `,
      secondLine: `FOR COLD DAY`,
      callToActionText: `CHECK OUT NEW AUTUMN COLLECTION`,
      bgImage: '/images/test503.jpg',
      bgDirectory: 'suits'
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

export default baybes;
