const Task3 = require('./Task3.js');

const calc = new Task3();

describe("Add tests", () => {

  test("Calc Add", () => {
    expect(calc.add(1, 2)).toBe(3);
    expect(calc.add(3, 4)).toBe(7);
    expect(calc.add(5, 6)).toBe(11);
  });

});

describe("Subtract tests", () => {

  test("Calc Subtract", () => {
    expect(calc.subtract(6, 3)).toBe(3);
    expect(calc.subtract(11, 4)).toBe(7);
    expect(calc.subtract(17, 6)).toBe(11);
  });

});

describe("Divide tests", () => {

  test("Calc Divide", () => {
    expect(calc.divide(9, 3)).toBe(3);
    expect(calc.divide(28, 4)).toBe(7);
    expect(calc.divide(66, 6)).toBe(11);
  });

});

describe("Multiply tests", () => {

  test("Multiply Divide", () => {
    expect(calc.multiply(3, 3)).toBe(9);
    expect(calc.multiply(7, 4)).toBe(28);
    expect(calc.multiply(11, 6)).toBe(66);
  });

});
