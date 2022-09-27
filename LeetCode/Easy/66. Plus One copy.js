function plusOne(digits) {
  for(let i = digits.length - 1; i >= 0; i--) {
    if(++digits[i] > 9) {
        digits[i] = 0;
    } else {
        return digits;
    }
  }
      
  if(digits[0] == 0) {
    digits.unshift(1);
  }
  
  return digits;
};

  
// console.log(plusOne([9,9]))
// console.log(plusOne([1]))
// console.log(plusOne([1, 2, 3]))
// console.log(plusOne([9]))
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,9,9]))
// console.log(plusOne([7,2,8,5,0,9,1,2,9,5,3,6,6,7,3,2,8,4,3,7,9,5,7,7,4,7,4,9,4,7,0,1,1,1,7,4,0,0,7]));
