// Styles
import styles from '../styles/LFooter.module.scss';
const {
  LFooterContainer,
  linkContainer,
  newsContainer,
  inputAndButtonContainer
} = styles;

// Hooks
import { useDispatch } from 'react-redux';

// Redux - Actions
import { setAlert } from '../redux/actions/alerts';

const LFooter = () => {
  const dispatch = useDispatch();

  const onLinkClick = () => {
    dispatch(
      setAlert('Sorry !!!!', 'This page in development right now', 'success')
    );
  };

  const onNewsletterButtonClick = () => {
    dispatch(
      setAlert('Sorry !!!!', 'Newsletter in development right now', 'success')
    );
  };

  return (
    <section className={LFooterContainer}>
      <div className={linkContainer}>
        <h3>HELP & INFORMATION</h3>
        <a href='#!' onClick={onLinkClick}>
          Help
        </a>
        <a href='#!' onClick={onLinkClick}>
          Track order
        </a>
        <a href='#!' onClick={onLinkClick}>
          Delivery & returns
        </a>
      </div>
      <div className={linkContainer}>
        <h3>ABOUT</h3>
        <a href='#!' onClick={onLinkClick}>
          About us
        </a>
        <a href='#!' onClick={onLinkClick}>
          Careers
        </a>
        <a href='#!' onClick={onLinkClick}>
          Investors’ site
        </a>
      </div>
      <div className={linkContainer}>
        <h3>MORE FROM KIDSZONE</h3>
        <a href='#!' onClick={onLinkClick}>
          Mobile and Kidszone apps
        </a>
        <a href='#!' onClick={onLinkClick}>
          Kidszone Marketplace
        </a>
        <a href='#!' onClick={onLinkClick}>
          Gift vouchers
        </a>
      </div>
      <div className={newsContainer}>
        <h3>GET THE NEWSLETTER</h3>
        <div className={inputAndButtonContainer}>
          <input type='text' placeholder='Enter Your Email' />
          <button onClick={onNewsletterButtonClick}>
            <i className='material-icons'>arrow_forward</i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LFooter;
