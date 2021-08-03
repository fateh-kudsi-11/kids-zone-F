// Styles
import styles from '../styles/AddressList.module.scss';
const {
  addressListContainer,
  selectedAddress,
  selectAddress,
  checkoutAddressList,
  addressCheckmark,
  addressListButtons,
  addNewAddressButton,
  checkmark
} = styles;

// Hooks
import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux - Actions
import { setShippingAddress } from '../redux/actions/order';

// Componetns
import AddressForm from './AddressForm';

const AddressList = () => {
  const dispatch = useDispatch();
  const addressBooks = useSelector((state) => state.auth.user.data.adressBooks);
  const shippingAddress = useSelector((state) => state.order.shippingAddress);
  const [pickAddrees, setPickAddrees] = useState(false);
  const [addressForm, setAddressForm] = useState(false);

  const setAddressOnFirstLoad = useCallback(() => {
    if (Object.keys(shippingAddress).length === 0) {
      dispatch(setShippingAddress(addressBooks[0]));
    }
  }, [shippingAddress, addressBooks, setShippingAddress]);

  const onChangeClick = () => {
    setPickAddrees(!pickAddrees);
    setAddressForm(false);
  };
  const onInputClick = (e) => {
    const address = addressBooks.find((a) => {
      return a._id === e.target.id;
    });
    dispatch(setShippingAddress(address));
    setPickAddrees(false);
  };
  const onAddNewAddressClick = () => {
    setAddressForm(true);
  };
  useEffect(() => {
    setAddressOnFirstLoad();
  }, [setAddressOnFirstLoad]);

  const { firstName, lastName, mobile, country, city, address, postcode, _id } =
    shippingAddress;
  return (
    <div className={addressListContainer}>
      {pickAddrees ? (
        <div className={selectAddress}>
          <ul className={checkoutAddressList}>
            {addressBooks.map((x) => (
              <li key={x._id}>
                <label
                  htmlFor={x._id}
                  className={`container container-c ${addressCheckmark}`}
                >
                  <input
                    type='radio'
                    name='address'
                    id={x._id}
                    checked={_id === x._id}
                    onChange={onInputClick}
                  />
                  <span className={checkmark}></span>
                </label>
                <p>{x.firstName}</p>
                <p>{x.lastName}</p>
                <p>{x.mobile}</p>
                <p>{x.country}</p>
                <p>{x.city}</p>
                <p>{x.address}</p>
                <p>{x.postcode}</p>
              </li>
            ))}
          </ul>
          {addressForm && (
            <AddressForm
              newAddress={true}
              setAddressForm={setAddressForm}
              setPickAddrees={setPickAddrees}
            />
          )}
          <div className={addressListButtons}>
            <button onClick={onChangeClick}>CANCEL</button>
            {!addressForm && (
              <button
                className={addNewAddressButton}
                onClick={onAddNewAddressClick}
              >
                ADD NEW ADDRESS
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className={selectedAddress}>
          <p>{firstName}</p>
          <p>{lastName}</p>
          <p>{mobile}</p>
          <p>{country}</p>
          <p>{city}</p>
          <p>{address}</p>
          <p>{postcode}</p>
        </div>
      )}

      {!pickAddrees && <button onClick={onChangeClick}>CHANGE</button>}
    </div>
  );
};

export default AddressList;
