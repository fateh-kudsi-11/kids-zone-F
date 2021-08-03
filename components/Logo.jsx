import styles from '../styles/Logo.module.scss';
import Link from 'next/link';

const { logoContainer } = styles;
const Logo = () => {
  return (
    <Link href='/'>
      <div className={logoContainer}>
        <span>KIDS ZONE</span>
      </div>
    </Link>
  );
};

export default Logo;
