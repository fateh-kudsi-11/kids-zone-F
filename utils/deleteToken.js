import axios from 'axios';
const deleteToken = () => {
  localStorage.removeItem('token');
  delete axios.defaults.headers.common['authorization'];
};

export default deleteToken;
