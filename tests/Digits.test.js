import Digits from '../src/Digits';

test('It validates strings as numbers', () => {
  const digits = new Digits('3');
  expect(digits.isValid()).toBe(true);
});

test('It validates when value is not a number', () => {
  const digits = new Digits('a');
  expect(digits.isValid()).toBe(false);
});

test('It get the error for not numbers', () => {
  const digits = new Digits('a');
  digits.isValid();
  expect(digits.getMessages()).toStrictEqual({notDigits: 'The input must contain only digits'});
});
