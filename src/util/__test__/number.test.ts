import { toNumber } from '../number';

describe('toNumber utility functions', () => {
  it('returns null when input is null', () => {
    expect(toNumber(null)).toBeNull();
  });

  it('returns null when input is not a number', () => {
    expect(toNumber('abc')).toBeNull();
  });

  it('returns the number when input is a number string', () => {
    expect(toNumber('123')).toBe(123);
  });

  it('returns the number when input is a decimal number string', () => {
    expect(toNumber('123.45')).toBe(123.45);
  });
});
