import Validator from '../index';

test.each([
  ['S-3-5a-s45sy', true],
  ['S-3-5a-s455sy', false],
  ['-3-5a-s45s', false],
  ['3-5a-s45s-', false],
  ['sam_-3s', false],
  ['3sam', false],
])(('test validateUsername'), (username, expected) => {
  const validator = new Validator();
  const result = validator.validateUsername(username);
  expect(result).toEqual(expected);
});
