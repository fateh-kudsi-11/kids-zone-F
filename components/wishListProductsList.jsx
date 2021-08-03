// Styles
import styles from '../styles/wishListProductsList.module.scss';
const { wishListProductsContainer } = styles;

// Componetns
import SingleProduct from '../components/SingleProduct';

//Hooks
import { useSelector } from 'react-redux';

const WishListProductsList = () => {
  const products = useSelector((state) => state.wishList.wishListProduct);
  return (
    <ul className={wishListProductsContainer}>
      {products.map((product) => (
        <SingleProduct key={product._id} wishList={true} {...product} />
      ))}
    </ul>
  );
};

export default WishListProductsList;
