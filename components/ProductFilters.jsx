// Styles
import styles from '../styles/ProductFilters.module.scss';
const { ProductFiltersContainer, diveder } = styles;

// Components
import ProductFiltersTitle from './ProductFiltersTitle';
import FiltersDropdown from './FiltersDropdown';

// Hooks
import { useDispatch } from 'react-redux';

// Redux - Actions
import { closeFilterDropdown } from '../redux/actions/filteringDropdown';

const ProductFilters = () => {
  const dispatch = useDispatch();

  const closeFiltersDropdown = () => {
    dispatch(closeFilterDropdown());
  };
  return (
    <main
      className={ProductFiltersContainer}
      onClick={closeFiltersDropdown}
      onMouseLeave={closeFiltersDropdown}
    >
      <ProductFiltersTitle />
      <FiltersDropdown />
      <div className={diveder} />
    </main>
  );
};

export default ProductFilters;
