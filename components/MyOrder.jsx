// Styles
import styles from '../styles/MyOrder.module.scss';
const { myOrderContainer } = styles;

// Hooks
import { useRouter } from 'next/router';

// Components
import BackToMyDetails from './BackToMyDetails';

const MyOrder = ({ setView }) => {
  const router = useRouter();
  const onLinkClick = () => {
    router.push('/');
  };
  return (
    <div className={myOrderContainer}>
      <BackToMyDetails setView={setView} />
      <h1>MY ORDERS </h1>
      <p>You currently have no orders</p>
      <button onClick={onLinkClick}>START SHOPPING</button>
    </div>
  );
};

export default MyOrder;
