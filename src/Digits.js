import HasMessages from './concerns/HasMessages';

class Digits {
  RegExpr = /^\d*$/;
  messages = {};

  constructor(value) {
    this.value = value;
  }

  isValid() {
    if (!this.value.match(this.RegExpr)) {
      this.messages.notDigits = 'The input must contain only digits';
      return false;
    }

    return true;
  }
}

Object.assign(Digits.prototype, HasMessages);

export default Digits;
