import isBoundedBy from "../GeneralFunctions/isBoundedBy";


describe('isBoundedBy', () => {
  test('should return true when element is within the bounds', () => {
    // Arrange
    const element = 5;
    const leftBorn = 0;
    const rightBorn = 10;

    // Act
    const result = isBoundedBy(element, leftBorn, rightBorn);

    // Assert
    expect(result).toBe(true); // expected result is true
  });

  test('should return false when element is outside the bounds', () => {
    // Arrange
    const element = 15;
    const leftBorn = 0;
    const rightBorn = 10;

    // Act
    const result = isBoundedBy(element, leftBorn, rightBorn);

    // Assert
    expect(result).toBe(false); // expected result is false
  });

  test('should return true when element is on the left bound', () => {
    // Arrange
    const element = 0;
    const leftBorn = 0;
    const rightBorn = 10;

    // Act
    const result = isBoundedBy(element, leftBorn, rightBorn);

    // Assert
    expect(result).toBe(true); // expected result is true
  });

  test('should return true when element is on the right bound', () => {
    // Arrange
    const element = 10;
    const leftBorn = 0;
    const rightBorn = 10;

    // Act
    const result = isBoundedBy(element, leftBorn, rightBorn);

    // Assert
    expect(result).toBe(true); // expected result is true
  });
});
