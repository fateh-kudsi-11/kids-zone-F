// Styles
import styles from '../styles/myDetails.module.scss';
const { myDetailsContainer, myDetailsForm } = styles;

// Hooks
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

// Redux - Actions
import { updateUser } from '../redux/actions/auth';

// Layout
import Input from '../layout/Input';
import Select from '../layout/Select';

// Utils
import { checkLength, checkEmail } from '../utils/validation';

// Components
import BackToMyDetails from './BackToMyDetails';

const MyDetails = ({ setView }) => {
  const { isAuth, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  if (!isAuth) return null;

  const [Title, setTitle] = useState({
    value: user.data.title,
    errorMsg: '',
    isError: false
  });

  const [FirstName, setFirstName] = useState({
    value: user.data.firstName,
    errorMsg: '',
    isError: false
  });

  const [LastName, setLastName] = useState({
    value: user.data.lastName,
    errorMsg: '',
    isError: false
  });

  const [Email, setEmail] = useState({
    value: user.data.email,
    errorMsg: '',
    isError: false
  });

  const [Gender, setGender] = useState({
    value: user.data.gender,
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
    checkLength(Gender, setGender, 'gender');
    const formValues = [FirstName.value, LastName.value, Email.value];

    const formErrors = [FirstName.isError, LastName.isError, Email.isError];

    const isAnyEmptyValue = formValues.some((value) => value === '');
    const isAnyError = formErrors.some((error) => error === true);

    if (isAnyEmptyValue) return;
    if (isAnyError) return;

    dispatch(
      updateUser({
        title: Title.value,
        firstName: FirstName.value,
        lastName: LastName.value,
        email: Email.value,
        gender: Gender.value
      })
    );
  };

  return (
    <div className={myDetailsContainer} onSubmit={onSubmit} noValidate>
      <h1>MY DETAILS</h1>
      <BackToMyDetails setView={setView} />
      <form className={myDetailsForm}>
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
        <button type='submit'>SAVE CHANGE</button>
      </form>
    </div>
  );
};

export default MyDetails;
