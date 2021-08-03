// Styles
import styles from '../styles/SingleAdressBook.module.scss';
const { singleAdressBookContainer, adressBookButton } = styles;
// Redux
import { useDispatch } from 'react-redux';
import { deleteAdressBook } from '../redux/actions/auth';
const SingleAdressBook = ({
  firstName,
  lastName,
  country,
  mobile,
  city,
  address,
  _id
}) => {
  const dispatch = useDispatch();
  const onClick = (e) => {
    dispatch(deleteAdressBook(_id));
  };
  return (
    <li className={singleAdressBookContainer}>
      <p>
        FullName:{' '}
        <span>
          {firstName} {lastName}
        </span>
      </p>
      <p>
        Mobile: <span>{mobile}</span>
      </p>
      <p>
        Country:<span>{country}</span>
      </p>
      <p>
        City:<span>{city}</span>
      </p>
      <p>
        Address:<span>{address}</span>
      </p>
      <button className={adressBookButton} onClick={onClick}>
        DELETE
      </button>
    </li>
  );
};

export default SingleAdressBook;
