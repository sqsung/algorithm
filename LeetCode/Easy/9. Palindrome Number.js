function isPalindrome(x) {
  let answer = false; 
  if(Number(x.toString().split('').reverse().join('')) === x) answer = true;
  return answer;
};