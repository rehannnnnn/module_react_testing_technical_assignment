import { Add, Substract, Multiplication } from '../Math'

test('Return sum of two arguments', () => {
  // Arrange
  const a = 15;
  const b = 15;
  const expected = 30;
  // Act
  const result = Add(a,b);

  // Assert
  expect(result).toBe(expected);
})

test('Return substraction of a - b', () => {
  // Arrange
  const a = 22;
  const b = 2;
  const expected = 20;

  // Act
  const result = Substract(a,b);

  // Assert
  expect(result).toBe(expected);
})

test('Return multiplication of two arguments', () => {
  // Arrange
  const a = 15;
  const b = 1;
  const expected = 15;

  // Act
  const result = Multiplication(a,b);

  // Assert
  expect(result).toBe(expected);
})