import validator from './validator.js';

const validateCardNumber = () => {
  const cardNumber = document.getElementById('card-number').value;
  const isValidCard = validator.isValid(cardNumber);
  const validationMsg = isValidCard ? 'TU TARJETA FUE VALIDADA CON EXITO': 'TU TARJETA NO ES VALIDA';
  document.getElementById('validation-msg').textContent = validationMsg;
  document.getElementById('validation-msg').style.display = 'block';
}

const verifyBtn = document.getElementById('verify-btn');
verifyBtn.addEventListener('click', () => {
  validateCardNumber();
})
