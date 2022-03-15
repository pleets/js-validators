import Alnum from '../src/Alnum';

test('It validates alnums when value is alpha', () => {
  const alnum = new Alnum('something');
  expect(alnum.isValid()).toBe(true);
});

test('It validates alnums when value is numeric', () => {
  const alnum = new Alnum('5785435');
  expect(alnum.isValid()).toBe(true);
});

test('It validates alnums when value has numbers and letters', () => {
  const alnum = new Alnum('578gnTd5435gh');
  expect(alnum.isValid()).toBe(true);
});

test('It validates alnums when value has numbers, letters and spaces', () => {
  const alnum = new Alnum('al56fs 567f aa 44');
  expect(alnum.isValid()).toBe(true);
});

test('It get the error for not alnums', () => {
  const digits = new Alnum('añ/45@');
  digits.isValid();
  expect(digits.getMessages()).toStrictEqual({
    notAlnum: 'The input contains characters which are non alphabetic and no digits',
  });
});
