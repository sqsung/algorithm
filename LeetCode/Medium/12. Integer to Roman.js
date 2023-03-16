const romans = {
  1: { 1: 'I', 4: 'IV', 5: 'V', 9: 'IX' },
  2: { 10: 'X', 40: 'XL', 50: 'L', 90: 'XC' },
  3: { 100: 'C', 400: 'CD', 500: 'D', 900: 'CM' },
  4: { 1000: 'M' },
};

const intToRoman = num => {
  const _num = [...(num + '')];
  let len = _num.length;

  const individuals = _num.map(num => {
    len--;
    num += '0'.repeat(len);

    return num;
  });

  // prettier-ignore
  const romanNumeral = individuals.map(num => {
    const numLen = num.length;
    const roman = romans[numLen];
    const keyToFive = '5' + '0'.repeat(numLen - 1);

    if (numLen === 4) return roman[1000].repeat(num / 1000);

    if (roman[num]) return roman[num];

    return `${num > +keyToFive ? roman[keyToFive] : ''}${roman[Object.keys(roman)[0]].repeat(
      (num % keyToFive) / (1 + '0'.repeat(numLen - 1))
    )}`;
  }).join('');

  return romanNumeral;
};

// Test Cases:
// console.log(intToRoman('6')); // -> VI
// console.log(intToRoman('62')); // -> LXII
// console.log(intToRoman('58')); // -> LVIII
// console.log(intToRoman('695')); // -> DCXCV
// console.log(intToRoman('1994')); // -> MCMXCIV
// console.log(intToRoman('3595')); // -> MMMDXCV
