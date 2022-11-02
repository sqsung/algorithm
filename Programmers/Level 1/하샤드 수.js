function solution(x) {
  let num = x.toString().split('');
  let sum = 0;
  
  for (const value of num) {
      sum += Number(value);
  }
  
  return x % sum === 0 ? true : false;
}
