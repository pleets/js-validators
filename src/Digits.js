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

export default Digits;
