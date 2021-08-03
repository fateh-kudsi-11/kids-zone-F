import { combineReducers } from 'redux';
// Reducers
import navbarPanel from './reducers/navbarPanel';
import navigation from './reducers/navigation';
import filteringDropdown from './reducers/filteringDropdown';
import products from './reducers/products';
import imageZoom from './reducers/imageZoom';
import alerts from './reducers/alerts';
import auth from './reducers/auth';
import wishList from './reducers/wishList';
import cart from './reducers/cart';
import order from './reducers/order';

export default combineReducers({
  navbarPanel,
  navigation,
  filteringDropdown,
  products,
  imageZoom,
  alerts,
  auth,
  wishList,
  cart,
  order
});
