// Style
import styles from '../styles/createAccount.module.scss';
const { createAccountContainer, createAccountTitle, createAccountForm, link } =
  styles;

// Hooks
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useState } from 'react';

// Redux - actions
import { registerUser } from '../redux/actions/auth';

// Components
import Input from '../layout/Input';
import Select from '../layout/Select';

// Utils
import {
  checkLength,
  checkEmail,
  checkPassword,
  checkConfirmPassword
} from '../utils/validation';

const createAccount = () => {
  const router = useRouter();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const isNavbarPanelOpen = useSelector(
    (state) => state.navbarPanel.isNavbarPanelOpen
  );
  const dispatch = useDispatch();

  const [Title, setTitle] = useState({
    value: '',
    errorMsg: '',
    isError: false
  });

  const [FirstName, setFirstName] = useState({
    value: '',
    errorMsg: '',
    isError: false
  });

  const [LastName, setLastName] = useState({
    value: '',
    errorMsg: '',
    isError: false
  });

  const [Email, setEmail] = useState({
    value: '',
    errorMsg: '',
    isError: false
  });

  const [Gender, setGender] = useState({
    value: '',
    errorMsg: '',
    isError: false
  });

  const [Password, setPassword] = useState({
    value: '',
    errorMsg: '',
    isError: false
  });

  const [confirmPassword, setConfirmPassword] = useState({
    value: '',
    errorMsg: '',
    isError: false
  });

  const [Date, setDate] = useState({
    value: '',
    errorMsg: '',
    isError: false
  });

  const genderOptions = [
    { value: '', text: 'Please Select' },
    { value: 'female', text: 'Female' },
    { value: 'male', text: 'Male' }
  ];

  const titleOptions = [
    { value: '', text: 'Please Select' },
    { value: 'mr', text: 'Mr' },
    { value: 'mrs', text: 'Mrs' },
    { value: 'miss', text: 'Miss' },
    { value: 'ms', text: 'Ms' },
    { value: 'mx', text: 'Mx' },
    { value: 'dr', text: 'Dr' }
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    checkLength(FirstName, setFirstName, 'first name');
    checkLength(LastName, setLastName, 'last name');
    checkEmail(Email, setEmail);
    checkLength(Date, setDate, 'date');
    checkLength(Gender, setGender, 'gender');
    checkPassword(Password, setPassword, 'password');
    checkConfirmPassword(
      confirmPassword,
      setConfirmPassword,
      'password',
      Password.value
    );
    const formValues = [
      FirstName.value,
      LastName.value,
      Email.value,
      Date.value,
      Password.value,
      confirmPassword.value
    ];

    const formErrors = [
      FirstName.isError,
      LastName.isError,
      Email.isError,
      Date.isError,
      Password.isError,
      confirmPassword.isError
    ];

    const isAnyEmptyValue = formValues.some((value) => value === '');
    const isAnyError = formErrors.some((error) => error === true);

    if (isAnyEmptyValue) return;
    if (isAnyError) return;

    dispatch(
      registerUser({
        title: Title.value,
        firstName: FirstName.value,
        lastName: LastName.value,
        email: Email.value,
        dateOfBirth: Date.value,
        gender: Gender.value,
        password: Password.value
      })
    );
  };

  const onLinkClick = (e) => {
    e.stopPropagation();
    router.push(`/login`);
  };

  if (isAuth) {
    router.push('/');
  }

  if (isNavbarPanelOpen) return null;

  return (
    <>
      <div className={createAccountContainer}>
        <div className={createAccountTitle}>
          <h1>Create Account</h1>
          <p>We won’t share your data or post anything on your behalf.</p>
        </div>
        <form onSubmit={onSubmit} className={createAccountForm} noValidate>
          <Select
            selectValue={Title}
            labelText='Title (Optional):'
            selectId='title'
            setValue={setTitle}
            options={titleOptions}
            runValidation={false}
          />

          <Input
            inputType='text'
            labelText='First Name:'
            inputId='first-name'
            inputName='first name'
            placeholder='Please Add Your First Name'
            inputValue={FirstName}
            setValue={setFirstName}
            checkValidation={checkLength}
          />
          <Input
            inputType='text'
            labelText='Last Name:'
            inputId='last-name'
            inputName='last name'
            placeholder='Please Add Your Last Name'
            inputValue={LastName}
            setValue={setLastName}
            checkValidation={checkLength}
          />

          <Select
            selectValue={Gender}
            labelText='Gender:'
            selectId='gender'
            setValue={setGender}
            selectName='Gender'
            options={genderOptions}
            runValidation={true}
            checkValidation={checkLength}
          />

          <Input
            inputType='email'
            labelText='Email Address:'
            inputId='email'
            inputName='email'
            placeholder='Please Add Your Email Address'
            inputValue={Email}
            setValue={setEmail}
            checkValidation={checkEmail}
          />

          <Input
            inputType='password'
            labelText='Password:'
            inputId='password'
            inputName='password'
            placeholder='Please Add Your Password '
            inputValue={Password}
            setValue={setPassword}
            checkValidation={checkPassword}
          />

          <Input
            inputType='password'
            labelText='Confirm Password:'
            inputId='confirm-password:'
            inputName='Confirm Password'
            placeholder='Please Confirm Your Password '
            inputValue={confirmPassword}
            setValue={setConfirmPassword}
            checkValidation={checkConfirmPassword}
            password={Password.value}
          />

          <Input
            inputType='date'
            labelText='Date Of Brith:'
            inputId='date'
            inputName='date'
            placeholder='Please Enter Your Birth Date'
            inputValue={Date}
            setValue={setDate}
            checkValidation={checkLength}
          />

          <button type='submit'>CREATE ACCOUNT</button>
          <button className={link} onClick={onLinkClick}>
            ALREDY HAVE AN ACCOUNT
          </button>
        </form>
      </div>
    </>
  );
};

export default createAccount;
