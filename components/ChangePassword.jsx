// Styles
import styles from '../styles/ChangePassword.module.scss';
const { changePasswordContainer, changePasswordForm } = styles;

// Hooks
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// Redux - Action
import { updatePassword } from '../redux/actions/auth';

// Layout
import Input from '../layout/Input';

// Utils
import { checkLength } from '../utils/validation';

// Components
import BackToMyDetails from './BackToMyDetails';

const ChangePassword = ({ setView }) => {
  const dispatch = useDispatch();
  const [currentPassword, setCurrentPassword] = useState({
    value: '',
    errorMsg: '',
    isError: false
  });
  const [newPassword, setNewPassword] = useState({
    value: '',
    errorMsg: '',
    isError: false
  });
  const onSubmit = (e) => {
    e.preventDefault();
    checkLength(currentPassword, setCurrentPassword, 'Current password');

    checkLength(newPassword, setNewPassword, 'new password');

    if (currentPassword.value === '' || newPassword.value === '') return;

    if (currentPassword.isError || newPassword.isError) return;

    dispatch(updatePassword(currentPassword.value, newPassword.value));

    setCurrentPassword({
      value: '',
      errorMsg: '',
      isError: false
    });
    setNewPassword({
      value: '',
      errorMsg: '',
      isError: false
    });
  };
  return (
    <div className={changePasswordContainer}>
      <BackToMyDetails setView={setView} />
      <h1>CHANGE PASSWORD</h1>
      <form className={changePasswordForm} onSubmit={onSubmit}>
        <Input
          inputType='password'
          labelText='Current Password:'
          inputId='current-password'
          inputName='current password'
          placeholder='Please Add Your Current Password '
          inputValue={currentPassword}
          setValue={setCurrentPassword}
          checkValidation={checkLength}
        />

        <Input
          inputType='password'
          labelText='New Password:'
          inputId='new-password'
          inputName='new password'
          placeholder='Please Add Your New Password  '
          inputValue={newPassword}
          setValue={setNewPassword}
          checkValidation={checkLength}
        />

        <button type='submit'>SAVE CHANGE</button>
      </form>
    </div>
  );
};

export default ChangePassword;
