import validator from './validator.js';

const validateCardNumber = () => {
  const cardNumber = document.getElementById('card-number').value;
  const isValidCard = validator.isValid(cardNumber);
  const input = document.getElementById('card-number');
  const maskedValue = validator.maskify(input.value);
  const validationMsg = isValidCard ? `${maskedValue} ES UNA TARJETA VALIDA`: `${maskedValue} NO ES UNA TARJETA VALIDA`;

  document.getElementById('validation-msg').textContent = validationMsg;
  document.getElementById('validation-msg').style.display = 'block';
  document.getElementById('card-number').style.display = 'none';
}

const verifyBtn = document.getElementById('verify-btn');
verifyBtn.addEventListener('click', () => {
  validateCardNumber();
})
