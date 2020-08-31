import wave from '../4.wave/index';

describe('spec/wave.spec.ts', () => {
  it('When "hello" should return wave hello', () => {
    const result = wave('hello');
    expect(result[0]).toEqual('Hello');
    expect(result[1]).toEqual('hEllo');
    expect(result[2]).toEqual('heLlo');
    expect(result[3]).toEqual('helLo');
    expect(result[4]).toEqual('hellO');
  });

  it('When "HEY" should return wave hey', () => {
    const result = wave('HEY');
    expect(result[0]).toEqual('Hey');
    expect(result[1]).toEqual('hEy');
    expect(result[2]).toEqual('heY');
  });
 
  it('When " h e y " should return wave hey with empty spaces around letters', () => {
    const result = wave(' h e y ');
    expect(result[0]).toEqual(' H e y ');
    expect(result[1]).toEqual(' h E y ');
    expect(result[2]).toEqual(' h e Y ');
  });

  it('When string is empty should return []', () => {
    const result = wave('');
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toEqual(0);
  });

});