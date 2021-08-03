// Styles
import styles from '../styles/Dropdown.module.scss';
const {
  dropdownContainer,
  dropdwonButton,
  dropdown,
  dropdownCheckboxes,
  positionCheckbox,
  radioLabel,
  sortCheckmark,
} = styles;

// Hooks
import { useSelector, useDispatch } from 'react-redux';
import { useState, useCallback, useEffect } from 'react';
// Redux Actions
import { setFilterDropdown } from '../redux/actions/filteringDropdown';
import { submitSortBy } from '../redux/actions/products';

const SortDropdown = () => {
  const dispatch = useDispatch();

  const isSortOpen = useSelector((state) => state.filteringDropdown.isSortOpen);

  const sort = useSelector((state) => state.products.sort);

  const [sortBy, setSortBy] = useState({
    newProduct: false,
    priceHighToLow: false,
    priceLowToHigh: false,
  });

  const loadSortBy = useCallback(() => {
    setSortBy((oldState) => {
      return {
        ...oldState,
        [sort]: true,
      };
    });
  }, [sort]);

  useEffect(() => {
    loadSortBy();
  }, [loadSortBy]);

  const handleChange = (e) => {
    setSortBy({
      ...sortBy,
      [e.target.name]: !!e.target.checked,
    });
    dispatch(submitSortBy(e.target.name));
  };

  const dropdownHandler = (e) => {
    e.stopPropagation();
    dispatch(setFilterDropdown({ isSortOpen: !isSortOpen }));
  };

  return (
    <div className={dropdownContainer} onClick={(e) => e.stopPropagation()}>
      <button className={dropdwonButton} onClick={dropdownHandler}>
        <span>Sort</span>
        <i className={`material-icons`}>play_arrow</i>
      </button>
      {isSortOpen && (
        <div className={dropdown} style={{ minHeight: '19rem' }}>
          <ul
            className={dropdownCheckboxes}
            style={{ overflow: 'hidden', minHeight: '19rem' }}
          >
            <li>
              <div className={positionCheckbox}>
                <input
                  type='radio'
                  name='newProduct'
                  id='new-products'
                  checked={sortBy.newProduct}
                  onChange={handleChange}
                />
                <label htmlFor='new-products' className={radioLabel}>
                  What's new <span className={sortCheckmark}></span>
                </label>
              </div>
            </li>
            <li>
              <div className={positionCheckbox}>
                <input
                  type='radio'
                  name='priceHighToLow'
                  id='price-high-to-low'
                  checked={sortBy.priceHighToLow}
                  onChange={handleChange}
                />
                <label htmlFor='price-high-to-low' className={radioLabel}>
                  Price high to low
                  <span className={sortCheckmark}></span>
                </label>
              </div>
            </li>
            <li>
              <div className={positionCheckbox}>
                <input
                  type='radio'
                  name='priceLowToHigh'
                  id='price-low-to-high'
                  checked={sortBy.priceLowToHigh}
                  onChange={handleChange}
                />
                <label htmlFor='price-low-to-high' className={radioLabel}>
                  Price low to high
                  <span className={sortCheckmark}></span>
                </label>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
