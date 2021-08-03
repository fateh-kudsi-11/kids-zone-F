// Styles
import styles from '../styles/login.module.scss';
const { loginContainer, loginForm, link, loginErrorMsg } = styles;

// Utils
import { checkEmail, checkLength, checkPassword } from '../utils/validation';

// Hooks
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useRouter } from 'next/router';

// Components
import Input from '../layout/Input';

// Redux - actions
import { login } from '../redux/actions/auth';

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const auth = useSelector((state) => state.auth);
  const { isAuth, isLoginFail } = auth;

  const [Email, setEmail] = useState({
    value: '',
    errorMsg: '',
    isError: false
  });
  const [Password, setPassword] = useState({
    value: '',
    errorMsg: '',
    isError: false
  });

  const onLinkClick = () => {
    router.push(`/createAccount`);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    checkEmail(Email, setEmail);
    checkLength(Password, setPassword, 'password');
    const isEmailError = Email.isError;
    const isPasswordError = Password.isError;
    if (isEmailError || isPasswordError) return;
    if (Email.value === '' || Password.value === '') return;
    dispatch(login(Email.value, Password.value));
  };

  if (isAuth) {
    router.push('/');
  }

  return (
    <div className={loginContainer}>
      <h1>Login</h1>
      {isLoginFail && (
        <div className={loginErrorMsg}>
          <p>
            Looks like either your email address or password were incorrect.
            Please try again.
          </p>
        </div>
      )}
      <form onSubmit={onSubmit} className={loginForm} noValidate>
        <Input
          inputType='email'
          inputName='email'
          labelText='Email Address:'
          inputId='login-email'
          placeholder='Please Enter Your Email Address'
          inputValue={Email}
          setValue={setEmail}
          checkValidation={checkEmail}
        />
        <Input
          inputType='password'
          labelText='Password:'
          inputName='password'
          inputId='login-password'
          placeholder='Please Enter Your Password'
          inputValue={Password}
          setValue={setPassword}
          checkValidation={checkPassword}
        />
        <button type='submit'>LOGIN</button>
        <button className={link} onClick={onLinkClick}>
          I DON’T HAVE AN ACCOUNT
        </button>
      </form>
    </div>
  );
};

export default Login;
