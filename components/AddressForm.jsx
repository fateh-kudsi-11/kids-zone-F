// Styles
import styles from '../styles/AddressForm.module.scss';
const { checkoutAddressForm, deliveryButton, formGroup } = styles;

// Hooks
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux - Action
import { deleteShippingAddress } from '../redux/actions/order';
import { updateAdressBook } from '../redux/actions/auth';

const AddressForm = ({ setAddressForm, setPickAddrees, newAddress }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user.data);
  const addressBooks = useSelector((state) => state.auth.user.data.adressBooks);
  const { firstName, lastName } = user;
  const [formData, setFormData] = useState({
    firstName,
    lastName,
    mobile: '',
    country: '',
    city: '',
    address: '',
    postcode: ''
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateAdressBook(formData));
    dispatch(deleteShippingAddress());
    if (newAddress) {
      setAddressForm(false);
      setPickAddrees(false);
    }
  };
  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  useEffect(() => {
    if (newAddress) {
      window.scroll({
        top: 400 * addressBooks.length,
        behavior: 'smooth'
      });
    }
  }, [newAddress]);

  return (
    <form onSubmit={onSubmit} className={checkoutAddressForm}>
      {newAddress && <h2>ADD NEW ADDRESS</h2>}
      <div className={formGroup}>
        <label htmlFor='first-name'>First Name:</label>
        <input
          type='text'
          name='firstName'
          id='first-name'
          value={formData.firstName}
          onChange={onChange}
          placeholder='Please Add Your First Name :'
        />
      </div>
      <div className={formGroup}>
        <label htmlFor='last-name'>Last Name:</label>
        <input
          type='text'
          name='lastName'
          id='last-name'
          value={formData.lastName}
          onChange={onChange}
          placeholder='Please Add Your Last Name :'
        />
      </div>
      <div className={formGroup}>
        <label htmlFor='mobile'>Mobile:</label>
        <input
          type='text'
          name='mobile'
          id='mobile'
          value={formData.mobile}
          onChange={onChange}
          placeholder='Please Add Your Mobile Number :'
        />
      </div>
      <div className={formGroup}>
        <label htmlFor='country'>Country:</label>
        <input
          type='text'
          name='country'
          id='country'
          value={formData.country}
          onChange={onChange}
          placeholder='Please Add Your Country :'
        />
      </div>
      <div className={formGroup}>
        <label htmlFor='city'>City:</label>
        <input
          type='text'
          name='city'
          id='city'
          value={formData.city}
          onChange={onChange}
          placeholder='Please Add Your City :'
        />
      </div>
      <div className={formGroup}>
        <label htmlFor='address'>Address:</label>
        <input
          type='text'
          name='address'
          id='address'
          value={formData.address}
          onChange={onChange}
          placeholder='Please Add Your Address :'
        />
      </div>
      <div className={formGroup}>
        <label htmlFor='postcode'>Postcode:</label>
        <input
          type='number'
          name='postcode'
          id='postcode'
          value={formData.postcode}
          onChange={onChange}
          placeholder='Please Add Your Postcode :'
        />
      </div>

      <button className={deliveryButton}>DELIVER TO THIS ADDRESS </button>
    </form>
  );
};

export default AddressForm;
