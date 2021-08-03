const setTotalQty = (totalQty) => {
  if (totalQty === 0) return '';

  if (totalQty >= 9) return `+9`;

  return totalQty;
};

export default setTotalQty;
