import { convertPLNToUSD } from './../convertPLNtoUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });

  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('6')).toBeNaN();
    expect(convertPLNToUSD('8')).toBeNaN();
    expect(convertPLNToUSD('2')).toBeNaN();
  });

  it('should return NaN when input is empty', () => {
    expect(convertPLNToUSD()).toBeNaN();
  }); 

  it('should return "$0.00." when input is below 0', () => {
    expect(convertPLNToUSD(-1)).toBe('$0.00.');
    expect(convertPLNToUSD(-8)).toBe('$0.00.');
    expect(convertPLNToUSD(-515)).toBe('$0.00.');
    expect(convertPLNToUSD(-132)).toBe('$0.00.');
  }); 

  it('should return Error when input is not a number and not a text', () => {
    expect(convertPLNToUSD([])).toBe('Error');
    expect(convertPLNToUSD(function () {})).toBe('Error');
    expect(convertPLNToUSD({})).toBe('Error');
    expect(convertPLNToUSD(null)).toBe('Error');
  });
});