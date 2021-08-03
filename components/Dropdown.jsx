// Styles
import styles from '../styles/Dropdown.module.scss';
const {
  dropdownContainer,
  dropdwonButton,
  dropDownOpen,
  dropdown,
  dropdownHeader,
  dropdownCheckboxes,
  positionCheckbox,
  numberOfProducts,
  dropdownPositionRight,
} = styles;

// Hooks
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useEffect, useState, useLayoutEffect } from 'react';

// Redux Actions
import { setFilterDropdown } from '../redux/actions/filteringDropdown';
import {
  setFilteredProducts,
  setAllFilters,
  clearAllFilters,
} from '../redux/actions/products';

const Dropdown = ({
  filterTitle,
  isDropdownOpen,
  kind,
  filterInputs,
  filterOutputName,
}) => {
  const dispatch = useDispatch();

  // Position of Dropdown
  const client = useRef();

  const dropdownHandler = (e) => {
    e.stopPropagation();
    dispatch(setFilterDropdown({ [kind]: !isDropdownOpen }));
  };
  const [positionRight, setPositionRight] = useState(false);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    const clientLeft = client.current.getBoundingClientRect().left;
    setLeft(clientLeft);
  });

  useLayoutEffect(() => {
    const y = window.innerWidth;
    const a = y - left;
    if (a < 350) {
      setPositionRight(true);
    }
  }, [left]);

  // ****************** //

  // Set Filter Checked

  const filterOutput = useSelector(
    (state) => state.products.filterOutput[filterOutputName]
  );

  const [filterInputChecked, setFilterInputChecked] = useState(() => {
    let filterInputsC = {};
    if (filterInputs) {
      filterInputs.forEach((input) => {
        const isEx = filterOutput.findIndex((e) => e === input.title);
        if (isEx !== -1) {
          filterInputsC = {
            ...filterInputsC,
            [input.title.replace(' ', '').trim()]: true,
          };
        } else {
          filterInputsC = {
            ...filterInputsC,
            [input.title.replace(' ', '').trim()]: false,
          };
        }
      });
    }
    return filterInputsC;
  });

  const onChange = (e) => {
    e.stopPropagation();
    setFilterInputChecked({
      ...filterInputChecked,
      [e.target.name]: !!e.target.checked,
    });

    dispatch(setFilteredProducts(filterOutputName, e.target.id));
  };

  // ****************** //

  // Set ALL & Clear ALL

  const setAllHandler = () => {
    dispatch(setAllFilters(filterOutputName));
  };

  const clearAllHandler = () => {
    dispatch(clearAllFilters(filterOutputName));
  };

  return (
    <div
      className={dropdownContainer}
      ref={client}
      onClick={(e) => e.stopPropagation()}
    >
      <button className={dropdwonButton} onClick={dropdownHandler}>
        <span>{filterTitle}</span>
        <i className={`material-icons ${isDropdownOpen ? dropDownOpen : null}`}>
          play_arrow
        </i>
      </button>
      {isDropdownOpen && (
        <div
          className={`${dropdown} ${
            positionRight ? dropdownPositionRight : null
          }`}
        >
          <div className={dropdownHeader}>
            <button
              disabled={filterOutput.length <= 0}
              onClick={clearAllHandler}
            >
              Clear
            </button>
            <button onClick={setAllHandler}>All</button>
          </div>
          <ul className={dropdownCheckboxes}>
            {filterInputs &&
              filterInputs.map((input) => (
                <li key={input.title}>
                  <div className={positionCheckbox}>
                    <input
                      type='checkbox'
                      name={`${input.title.replace(' ', '').trim()}`}
                      id={`${input.title}`}
                      checked={
                        filterInputChecked[input.title.replace(' ', '').trim()]
                      }
                      onChange={onChange}
                    />
                    <label htmlFor={`${input.title}`}>
                      {input.title}
                      <span className={numberOfProducts}>({input.count})</span>
                    </label>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
