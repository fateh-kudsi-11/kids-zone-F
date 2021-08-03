// Styles
import styles from '../styles/Discount.module.scss';
const { DiscountContainer, number, DiscountText, text } = styles;

// Hooks
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

// Redux - Actions
import { setDirectory } from '../redux/actions/navigation';

const Discount = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const gender = useSelector((state) => state.navigation.gender);

  const onOutlineButtonClick = () => {
    dispatch(setDirectory('new'));
    router.push('/productsList');
  };
  return (
    <section className={DiscountContainer}>
      <div className={DiscountText}>
        <h1 className={text}>
          <span className={number}>50%</span>{' '}
          <span className={text}>OFF ALL {gender} WEAR</span>
        </h1>
      </div>
      <button onClick={onOutlineButtonClick}>
        CHECK OUT OUTLINE COLLECTION
      </button>
    </section>
  );
};

export default Discount;
