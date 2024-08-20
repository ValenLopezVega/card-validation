import validator from './validator.js';

const validateCardNumber = () => {
  const cardNumber = document.getElementById('card-number').value;
  let validationMsg = '';

  if(cardNumber.length < 12){
    validationMsg = 'DEBE INGRESAR MINIMO 12 DIGITOS';

  } else {
    const isValidCard = validator.isValid(cardNumber);
    const input = document.getElementById('card-number');
    const maskedValue = validator.maskify(input.value);
    validationMsg = isValidCard ? `${maskedValue} ES UNA TARJETA VALIDA`: `${maskedValue} NO ES UNA TARJETA VALIDA`;

    document.getElementById('card-number').style.display = 'none';
    document.getElementById('verify-btn').style.display = 'none';
    document.getElementById('return-btn').style.display = 'block';
  }

  document.getElementById('validation-msg').textContent = validationMsg;
  document.getElementById('validation-msg').style.display = 'block';
}

const returnToInitial = () => {
  document.getElementById('verify-btn').style.display = 'block';
  document.getElementById('return-btn').style.display = 'none';
  document.getElementById('card-number').style.display = 'block';
  document.getElementById('validation-msg').style.display = 'none';
}

const verifyBtn = document.getElementById('verify-btn');
verifyBtn.addEventListener('click', () => {
  validateCardNumber();
})

const returnBtn = document.getElementById('return-btn');
returnBtn.addEventListener('click', () => {
  returnToInitial();
})
