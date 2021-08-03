// Styles
import styles from '../styles/EmptyWishList.module.scss';
const { emptyWishListContainer } = styles;

// Hooks
import { useRouter } from 'next/router';

const EmptyWishList = () => {
  const router = useRouter();
  const onLinkClick = () => {
    router.push('/');
  };
  return (
    <div className={emptyWishListContainer}>
      <h2>Your wish list is currently empty</h2>
      <p>Use the wish list to add your favorite items as you start shopping.</p>
      <button onClick={onLinkClick}>START SHOPPING</button>
    </div>
  );
};

export default EmptyWishList;
