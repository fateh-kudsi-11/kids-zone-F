// Styles
import styles from '../styles/SingleOrderItems.module.scss';
const {
  singleOrderItemContainer,
  orderItemsInfo,
  orderItemPrice,
  orderItemName,
  orderItemColorSize,
  orderItemSize,
  orederItemQty
} = styles;

const SingleOrderItems = (props) => {
  const { images, price, qty, productName, selectedColor, selectedSize } =
    props;
  return (
    <li className={singleOrderItemContainer}>
      <img src={images[0].images[0]} alt={`${productName}`} />
      <div className={orderItemsInfo}>
        <p className={orderItemPrice}>${price / 1000}</p>
        <p className={orderItemName}>{productName}</p>
        <p className={orderItemColorSize}>
          {selectedColor} <span className={orderItemSize}>{selectedSize}</span>
        </p>
        <p>
          {' '}
          <span className={orederItemQty}> Qty:</span>
          {qty}
        </p>
        <p></p>
      </div>
    </li>
  );
};

export default SingleOrderItems;
