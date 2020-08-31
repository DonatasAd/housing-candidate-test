import math from '../3.math/index';

describe('spec/math.spec.ts', () => {
  it('When 65, 60, 75, 55, 60, 63, 64, 45 should return number 86', () => {
    const result = math(65, 60, 75, 55, 60, 63, 64, 45);
    expect(result).toEqual(86.84037079607617);
  });

  it('When 10 should return number 5', () => {
    const result = math(10);
    expect(result).toEqual(5);
  });

  it('When 0 should return number 0', () => {
    const result = math(0);
    expect(result).toEqual(0);
  });

  it('When no argument should return number 0', () => {
    const result = math();
    expect(result).toEqual(0);
  });
});
