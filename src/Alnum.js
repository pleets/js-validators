import HasMessages from './concerns/HasMessages';

class Alnum {
  RegExpr = /^(\d|[a-zA-Z]|\s)*$/;
  messages = {};

  constructor(value) {
    this.value = value;
  }

  isValid() {
    if (!this.value.match(this.RegExpr)) {
      this.messages.notAlnum = 'The input contains characters which are non alphabetic and no digits';
      return false;
    }

    return true;
  }
}

Object.assign(Alnum.prototype, HasMessages);

export default Alnum;
