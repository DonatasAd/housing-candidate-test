import chainReduction from '../5.chain-reduction/index';
import fs from 'fs';
let text = fs.readFileSync(process.cwd() + '/5.chain-reduction/input.txt', 'utf8');

describe('spec/chainReduction.spec.ts', () => {
  it('When "uU" should return empty string', () => {
    const result = chainReduction('uU');
    expect(result).toEqual('');
  });

  it('When "urRU" should return empty string', () => {
    const result = chainReduction('urRU');
    expect(result).toEqual('');
  });

  it('When "uuRU" should return "uuRU"', () => {
    const result = chainReduction('uuRU');
    expect(result).toEqual('uuRU');
  });

  it('When "uuRUUR" should return "uuRUUR"', () => {
    const result = chainReduction('uuRUUR');
    expect(result).toEqual('uuRUUR');
  });

  it('When "ebcBdDbDCBdDdbEB" should return "ebcDCBdbEB"', () => {
    const result = chainReduction('ebcBdDbDCBdDdbEB');
    expect(result).toEqual('ebcDCBdbEB');
  });

  it('When text from file should return 9348', () => {
    const result = chainReduction(text);
    expect(result.length).toEqual(9348);
  });
});
