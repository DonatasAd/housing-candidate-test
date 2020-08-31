import same from '../2.same/index';

describe('spec/same.spec.ts', () => {
  it('When "ddkk" should return true', () => {
    const result = same('ddkk');
    expect(result).toEqual(true);
  });

  it('When "dkkdd" should return false', () => {
    const result = same('dkkdd');
    expect(result).toEqual(false);
  });

  it('When "ddkKm" should return true', () => {
    const result = same('ddkKm');
    expect(result).toEqual(true);
  });

  it('When "dmm" should return false', () => {
    const result = same('dmm');
    expect(result).toEqual(false);
  });

  it('When "eSss" should return true', () => {
    const result = same('eSss');
    expect(result).toEqual(true);
  });

  it('When string is empty should return true', () => {
    const result = same('');
    expect(result).toEqual(true);
  });
});
