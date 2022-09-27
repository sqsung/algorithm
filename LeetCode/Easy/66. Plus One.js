var plusOne = function(digits) {
  let num = 0;
  let answer;
  if(digits.length <= 16) {
    num = Number(digits.join('')) + 1; 
    answer = num.toString().split('');
    return answer;
  }

  let first = '', second = '', combined = '';
  if(digits.length > 15) {
    for(let i = 0; i < 16; i++) {
      first += digits[i].toString();
    }
    for(let i = 16; i < digits.length; i++) {
      second += digits[i].toString();
    }
    
    let sum = Number(second) + 1;
    if (sum.toString().length === second.length) {
      combined += first + sum;
      return combined.split('');
    } 
    if (sum.toString().length !== second.length) {
      let sumX = Number(first) + 1;
      combined += sumX + sum;
      return combined.split('');
    }
  } 
}

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,9,9]))
console.log(plusOne([9,9]))
// console.log(plusOne([1]))
// console.log(plusOne([1, 2, 3]))
// console.log(plusOne([9]))