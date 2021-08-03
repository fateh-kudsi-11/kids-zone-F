// Styles
import styles from '../styles/BackToMyDetails.module.scss';
const { BackToMyDetailsContainer } = styles;

const BackToMyDetails = ({ setView }) => {
  const onClick = (e) => {
    e.stopPropagation();
    setView('');
  };
  return (
    <button className={BackToMyDetailsContainer} onClick={onClick}>
      <i className='material-icons'>keyboard_backspace</i>
    </button>
  );
};

export default BackToMyDetails;
