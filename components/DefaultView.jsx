// Styles
import styles from '../styles/DefaultView.module.scss';
const { defaultViewContainer } = styles;

const DefaultView = () => {
  return (
    <div className={defaultViewContainer}>
      <h1>My Account</h1>
      <p>you can manage your account in this page</p>
    </div>
  );
};

export default DefaultView;
