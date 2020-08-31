import number from '../1.number/index';

describe('spec/number.spec.ts', () => {
  it('When [1, 2] should return number 2', () => {
    const result = number([1, 2]);
    expect(result).toEqual(2);
  });

  it('When [2, 4] should return number 3', () => {
    const result = number([2, 4]);
    expect(result).toEqual(3);
  });

  it('When [23, 18, 1, 1, 1, 1] should return number 8', () => {
    const result = number([23, 18, 1, 1, 1, 1]);
    expect(result).toEqual(8);
  });

  it('When [1, 2, 3, 4, 5] should return number 3', () => {
    const result = number([1, 2, 3, 4, 5]);
    expect(result).toEqual(3);
  });

  it('When Array is empty should return null', () => {
    const result = number([]);
    expect(result).toEqual(null);
  });
});
