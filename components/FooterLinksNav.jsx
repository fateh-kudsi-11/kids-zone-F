import styles from '../styles/FooterLinksNav.module.scss';
const { container, removeIcon, footerLinks, footerLinksContainer, flex1 } =
  styles;

// Hooks
import { useDispatch } from 'react-redux';

// Redux - Actions
import { setAlert } from '../redux/actions/alerts';

const FooterLinksNav = () => {
  const dispatch = useDispatch();

  const onLinkClick = () => {
    dispatch(
      setAlert('Sorry !!!!', 'This page in development right now', 'success')
    );
  };

  return (
    <div className={container}>
      <details>
        <summary>
          <span>Help & Information </span>
          <img src='/icons/add.svg' alt='add-icon' />
          <img
            src='/icons/remove.svg'
            alt='remove-icon'
            className={removeIcon}
          />
        </summary>
        <div className={footerLinksContainer}>
          <div className={footerLinks}>
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
          <div className={flex1}></div>
        </div>
      </details>
      <details>
        <summary>
          <span>About</span>
          <img src='/icons/add.svg' alt='add-icon' />
          <img
            src='/icons/remove.svg'
            alt='remove-icon'
            className={removeIcon}
          />
        </summary>
        <div className={footerLinksContainer}>
          <div className={footerLinks}>
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
          <div className={flex1}></div>
        </div>
      </details>
      <details>
        <summary>
          <span>More From Kidszone</span>
          <img src='/icons/add.svg' alt='add-icon' />
          <img
            src='/icons/remove.svg'
            alt='remove-icon'
            className={removeIcon}
          />
        </summary>
        <div className={footerLinksContainer}>
          <div className={footerLinks}>
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
          <div className={flex1}></div>
        </div>
      </details>
    </div>
  );
};

export default FooterLinksNav;
