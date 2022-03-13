import Digits from '../src/Digits';

test('Test Digits', () => {
  const digits = new Digits();
  expect(digits.isValid(3)).toBe(true);
});
