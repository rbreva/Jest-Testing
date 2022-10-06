const Task1 = require('./Task1.js');

test('number of caracters = 9', () => {
  expect(Task1('testtask1')).toBe(9);
});

test('number of caracters = 9', () => {
  expect(Task1('testtask1error')).toBe('error');
});