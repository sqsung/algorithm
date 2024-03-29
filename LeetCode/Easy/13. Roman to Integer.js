const romans = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// prettier-ignore
const romanToInt = s => {
  Object.keys(romans).map(numeral => (s = s.replaceAll(numeral, `${romans[numeral]},`)));
  return s.split(',').reduce((a, c) => a + +c, 0);
};

// Test Cases:
// console.log(romanToInt('X'));
// console.log(romanToInt('LVIII'));
// console.log(romanToInt('MCMXCIV'));
// console.log(romanToInt('MMMDXCV'));
