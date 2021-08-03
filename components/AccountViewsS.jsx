// Styles
import styles from '../styles/AccountViewsS.module.scss';
const { AccountViewsSContainer } = styles;

// Components
import MyOrder from '../components/MyOrder';
import MyDetails from '../components/MyDetails';
import ChangePassword from '../components/ChangePassword';
import AdressBook from '../components/AdressBook';
import DefaultViewS from '../components/DefaultViewS';

const AccountViewsS = ({ view, setView }) => {
  let activeView;

  switch (view) {
    case 'my-order':
      activeView = <MyOrder setView={setView} />;
      break;
    case 'my-details':
      activeView = <MyDetails setView={setView} />;
      break;
    case 'change-password':
      activeView = <ChangePassword setView={setView} />;
      break;
    case 'adress-book':
      activeView = <AdressBook setView={setView} />;
      break;
    default:
      activeView = <DefaultViewS setView={setView} />;
      break;
  }

  return <section className={AccountViewsSContainer}>{activeView}</section>;
};

export default AccountViewsS;
