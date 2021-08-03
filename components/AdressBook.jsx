// Styles
import styles from '../styles/AdressBook.module.scss';
const { adressBookContainer, adressBookForm } = styles;

// Hooks
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS
import AdressBookList from '../components/AdressBookList';
import BackToMyDetails from './BackToMyDetails';

// Layout
import Input from '../layout/Input';

// REDUX
import { updateAdressBook } from '../redux/actions/auth';

// UTILS
import { checkLength } from '../utils/validation';

const AdressBook = ({ setView }) => {
  const adressBooks = useSelector((state) => state.auth.user.data.adressBooks);

  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState({
    value: '',
    errorMsg: '',
    isError: false
  });

  const [lastName, setLastName] = useState({
    value: '',
    errorMsg: '',
    isError: false
  });

  const [mobile, setMobile] = useState({
    value: '',
    errorMsg: '',
    isError: false
  });

  const [country, setCountry] = useState({
    value: '',
    errorMsg: '',
    isError: false
  });

  const [city, setCity] = useState({
    value: '',
    errorMsg: '',
    isError: false
  });

  const [address, setAddress] = useState({
    value: '',
    errorMsg: '',
    isError: false
  });

  const [postcode, setPostCode] = useState({
    value: '',
    errorMsg: '',
    isError: false
  });

  const onSubmit = (e) => {
    e.preventDefault();

    checkLength(firstName, setFirstName, 'first name');
    checkLength(lastName, setLastName, 'last Name');
    checkLength(mobile, setMobile, 'Mobile');
    checkLength(country, setCountry, 'country');
    checkLength(city, setCity, 'city');
    checkLength(address, setAddress, 'address');
    checkLength(postcode, setPostCode, 'postcode');

    const formValues = [
      firstName.value,
      lastName.value,
      mobile.value,
      country.value,
      city.value,
      address.value,
      postcode.value
    ];

    const formErrors = [
      firstName.isError,
      lastName.isError,
      mobile.isError,
      country.isError,
      city.isError,
      address.isError,
      postcode.isError
    ];

    const isAnyEmptyValue = formValues.some((value) => value === '');
    const isAnyError = formErrors.some((error) => error === true);

    if (isAnyEmptyValue) return;
    if (isAnyError) return;

    dispatch(
      updateAdressBook({
        firstName: firstName.value,
        lastName: lastName.value,
        mobile: mobile.value,
        country: country.value,
        city: city.value,
        address: address.value,
        postcode: postcode.value
      })
    );
    setFirstName({
      value: '',
      errorMsg: '',
      isError: false
    });
    setLastName({
      value: '',
      errorMsg: '',
      isError: false
    });
    setMobile({
      value: '',
      errorMsg: '',
      isError: false
    });
    setCountry({
      value: '',
      errorMsg: '',
      isError: false
    });
    setCity({
      value: '',
      errorMsg: '',
      isError: false
    });
    setAddress({
      value: '',
      errorMsg: '',
      isError: false
    });
    setPostCode({
      value: '',
      errorMsg: '',
      isError: false
    });
  };

  return (
    <div className={adressBookContainer}>
      <BackToMyDetails setView={setView} />
      <h1>ADRESS BOOK</h1>
      {adressBooks.length > 0 && (
        <>
          <AdressBookList />

          <h2>Add Another Adress book</h2>
        </>
      )}
      <form className={adressBookForm} onSubmit={onSubmit}>
        <Input
          inputType='text'
          labelText='First Name:'
          inputId='first-name'
          inputName='first name'
          placeholder='Please Add Your First Name :'
          inputValue={firstName}
          setValue={setFirstName}
          checkValidation={checkLength}
        />

        <Input
          inputType='text'
          labelText='Last Name:'
          inputId='last-name'
          inputName='last name'
          placeholder='Please Add Your Last Name :'
          inputValue={lastName}
          setValue={setLastName}
          checkValidation={checkLength}
        />

        <Input
          inputType='text'
          labelText='Mobile:'
          inputId='mobile'
          inputName='mobile'
          placeholder='Please Add Your Mobile Number :'
          inputValue={mobile}
          setValue={setMobile}
          checkValidation={checkLength}
        />

        <Input
          inputType='text'
          labelText='Country:'
          inputId='country'
          inputName='country'
          placeholder='Please Add Your Country :'
          inputValue={country}
          setValue={setCountry}
          checkValidation={checkLength}
        />

        <Input
          inputType='text'
          labelText='City:'
          inputId='city'
          inputName='city'
          placeholder='Please Add Your City :'
          inputValue={city}
          setValue={setCity}
          checkValidation={checkLength}
        />

        <Input
          inputType='text'
          labelText='Address:'
          inputId='address'
          inputName='address'
          placeholder='Please Add Your Address :'
          inputValue={address}
          setValue={setAddress}
          checkValidation={checkLength}
        />

        <Input
          inputType='text'
          labelText='Postcode:'
          inputId='postcode'
          inputName='postcode'
          placeholder='Please Add Your Postcode :'
          inputValue={postcode}
          setValue={setPostCode}
          checkValidation={checkLength}
        />

        <button type='submit'>SAVE CHANGE</button>
      </form>
    </div>
  );
};

export default AdressBook;
