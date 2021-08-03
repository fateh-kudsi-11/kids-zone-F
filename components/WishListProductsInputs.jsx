// Styles
import styles from '../styles/WishListProductsInputs.module.scss';
const { wishListInputsContainer } = styles;

// Hooks
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// Redux - Action
import { addProductToCart } from '../redux/actions/cart';

const WishListProductsInputs = ({ sizes, id, color }) => {
  const dispatch = useDispatch();

  const onClick = (e) => {
    e.stopPropagation();
  };

  const onAddToCartClick = (e) => {
    e.stopPropagation();
    dispatch(addProductToCart(id, color, size));
  };

  const [size, setSize] = useState('');

  const onSizeInputChange = (e) => {
    setSize(e.target.value);
  };
  return (
    <div className={wishListInputsContainer}>
      <button disabled={size === ''} onClick={onAddToCartClick}>
        ADD TO BAG<i className='material-icons'>work_outline</i>{' '}
      </button>
      <select onClick={onClick} onChange={onSizeInputChange} value={size}>
        <option value=''>Size</option>
        {sizes.map((size, index) => (
          <option key={index} value={`${size}`}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};

export default WishListProductsInputs;
