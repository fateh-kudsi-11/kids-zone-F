const userIconUtils = (firstName, lastName) => {
  const firstNameLe = firstName.split('');
  const lastNameLe = lastName.split('');
  const firstL = firstNameLe[0].toUpperCase();
  const lastL = lastNameLe[0].toUpperCase();
  const userIcon = `${firstL}${lastL}`;
  return userIcon;
};

export default userIconUtils;
