const validator = {
  isValid(num) {
    const reversedNum = num.toString().split('').reverse();

    const doubledDigits = reversedNum.map((digit, index) => {
      let intDigit = parseInt(digit);

      if (index % 2 !== 0) {
        intDigit *= 2;
        if (intDigit > 9) {
          intDigit -= 9;
        }
      }
      return intDigit;
    });

    const sum = doubledDigits.reduce((acc, val) => acc + val, 0);

    return sum % 10 === 0;
  },

  maskify(cardNumber) {
    let masked = '';

    for (let i = 0; i < cardNumber.length; i++) {
      if (i < cardNumber.length - 4) {
        masked += '#';
      } else {
        masked += cardNumber[i];
      }
    }

    return masked;
  }
}

export default validator;
