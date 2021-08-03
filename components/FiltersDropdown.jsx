// Styles
import styles from '../styles/FiltersDropdown.module.scss';
const { FiltersDropdownContainer } = styles;

// Components
import Dropdown from './Dropdown';
import SortDropdown from './SortDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';

// Hooks
import { useSelector } from 'react-redux';

const FiltersDropdown = () => {
  const filteringDropdown = useSelector((state) => state.filteringDropdown);

  const { isProductTypeOpen, isBrandOpen, isColorOpen, isSizeOpen } =
    filteringDropdown;

  const filterElements = useSelector((state) => state.products.filterElements);

  const { productType, colors, brands, sizes, price } = filterElements;

  return (
    <div className={FiltersDropdownContainer}>
      <SortDropdown />

      <Dropdown
        filterTitle='Product Type'
        isDropdownOpen={isProductTypeOpen}
        kind='isProductTypeOpen'
        filterInputs={productType}
        filterOutputName='productType'
      />
      <Dropdown
        filterTitle='Brand'
        isDropdownOpen={isBrandOpen}
        kind='isBrandOpen'
        filterInputs={brands}
        filterOutputName='brands'
      />

      <Dropdown
        filterTitle='Color'
        isDropdownOpen={isColorOpen}
        kind='isColorOpen'
        filterInputs={colors}
        filterOutputName='colors'
      />

      <Dropdown
        filterTitle='Size'
        isDropdownOpen={isSizeOpen}
        kind='isSizeOpen'
        filterInputs={sizes}
        filterOutputName='sizes'
      />

      <PriceRangeDropdown priceInput={price} />
    </div>
  );
};

export default FiltersDropdown;
