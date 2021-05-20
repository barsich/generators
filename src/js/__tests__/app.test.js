import canIterate from '../app';

test('canIterate', () => {
  expect(canIterate(new Set())).toBeTruthy();
  expect(canIterate(new Map())).toBeTruthy();
  expect(canIterate(null)).toBeFalsy();
  expect(canIterate(10)).toBeFalsy();
  expect(canIterate('Netology')).toBeTruthy();
});
