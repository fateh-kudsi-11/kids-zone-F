// Styles
import styles from '../styles/ProductFiltersTitle.module.scss';
const { ProductFiltersTitleContainer } = styles;
// Hooks
import { useSelector } from 'react-redux';

const ProductFiltersTitle = () => {
  const navigation = useSelector((state) => state.navigation);
  const { directory, gender } = navigation;
  return (
    <div className={ProductFiltersTitleContainer}>
      <h1>
        {gender} {directory}
      </h1>
    </div>
  );
};

export default ProductFiltersTitle;
