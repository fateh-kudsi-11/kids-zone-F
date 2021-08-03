// Utiles
import navLinks from '../utils/navDirectory';

// Hooks
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import styles from '../styles/FilterNav.module.scss';

// Redux - Actions
import { setDirectory } from '../redux/actions/navigation';

const { filterNavContainer, active } = styles;
const FilterNav = () => {
  const navigation = useSelector((state) => state.navigation);
  const dispatch = useDispatch();
  const { gender, directory } = navigation;
  const router = useRouter();

  const onNavLinkClick = (x, e) => {
    dispatch(setDirectory(x.toLowerCase()));
    router.push('/productsList');
  };

  return (
    <nav className={filterNavContainer}>
      <ul>
        {gender &&
          navLinks[gender]?.map((el) => (
            <li key={el.title} onClick={onNavLinkClick.bind(this, el.title)}>
              <button
                className={`${
                  directory === el.title.toLowerCase() ? active : null
                }`}
              >
                {el.title}
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default FilterNav;
