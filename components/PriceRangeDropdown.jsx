// Styles
import styles from '../styles/Dropdown.module.scss';
const {
  dropdownContainer,
  dropdwonButton,
  priceSlider,
  priceValue,
  dropdown,
  priceSliderContainer,
} = styles;

// Hooks
import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import Slider from '@material-ui/core/Slider';

// Redux Actions
import { setFilterDropdown } from '../redux/actions/filteringDropdown';
import { setProductsPriceRange } from '../redux/actions/products';

const PriceRangeDropdown = ({ priceInput }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState([]);

  const isPriceRangeOpen = useSelector(
    (state) => state.filteringDropdown.isPriceRangeOpen
  );

  const priceOutput = useSelector(
    (state) => state.products.filterOutput.priceRange
  );

  const minPrice = priceInput ? priceInput.minPrice / 1000 : 0;
  const maxPrice = priceInput ? priceInput.maxPrice / 1000 : 0;

  const loadPrice = useCallback(() => {
    if (priceOutput.length > 0) {
      setValue([priceOutput[0], priceOutput[1]]);
    } else {
      setValue([minPrice, maxPrice]);
    }
  }, [priceOutput, minPrice, maxPrice]);

  useEffect(() => {
    loadPrice();
  }, [loadPrice]);

  const handleChange = (e, newValue) => {
    e.stopPropagation();
    setValue(newValue);
  };

  const submitChange = (e, newValue) => {
    e.stopPropagation();
    dispatch(setProductsPriceRange(value));
  };

  const dropdownHandler = (e) => {
    e.stopPropagation();
    dispatch(setFilterDropdown({ isPriceRangeOpen: !isPriceRangeOpen }));
  };

  return (
    <div className={dropdownContainer}>
      <button className={dropdwonButton} onClick={dropdownHandler}>
        <span>Price Range</span>
        <i className={`material-icons`}>play_arrow</i>
      </button>

      {isPriceRangeOpen && (
        <div className={`${dropdown} ${priceSliderContainer}`}>
          <div className={priceSlider}>
            <div className={priceValue}>
              <span>{value[0]}$</span>
              <span>{value[1]}$</span>
            </div>
            <Slider
              value={value}
              onChange={handleChange}
              onChangeCommitted={submitChange}
              aria-labelledby='range-slider'
              max={maxPrice}
              min={minPrice}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceRangeDropdown;
