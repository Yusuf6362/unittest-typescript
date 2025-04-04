import { add, subtract, multiply, divide } from "./calculator";

test("add three to two is five", () => {
  // Arrange
  const a: number = 2;
  const b: number = 3;
  const expected: number = 5;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract four from six is two", () => {
  // Arrange
  const a: number = 6;
  const b: number = 4;
  const expected: number = 2;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test('multiply two and three is six', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('divide six by two is three', () => {
  expect(divide(6, 2)).toBe(3);
});

test('division by zero should throw an error', () => {
  expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
});
