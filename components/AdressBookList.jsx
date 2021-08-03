// Styles
import styles from '../styles/AdressBookList.module.scss';
const { adressBookListContainer } = styles;

// Components
import SingleAdressBook from './SingleAdressBook';

// Hooks
import { useSelector } from 'react-redux';

const AdressBookList = () => {
  const adressBooks = useSelector((state) => state.auth.user.data.adressBooks);

  return (
    <ul className={adressBookListContainer}>
      {adressBooks.map((e) => (
        <SingleAdressBook key={e._id} {...e} />
      ))}
    </ul>
  );
};

export default AdressBookList;
