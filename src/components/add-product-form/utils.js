const isNumeric = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

export const vaildateFormInputs = (cellBarcode, productBarcode, amount, resetAmount) => {
  let message = '';

  if (cellBarcode.trim() === '' 
      || productBarcode.trim() === '' 
      || amount.trim() === '') {
    message += `Пожалуйста, заполните все поля. `;
    return message;
  };

  if (!isNumeric(amount) || amount === '0') {
    message += `Поле "Amount" должно быть числом и не может принимать значение 0`;
    resetAmount();
  };

  return message;
};
