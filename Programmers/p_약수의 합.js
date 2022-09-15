function solution(num) {
  let answer = 0,
      arr = [];
      
  for (let i = 1; i <= num; i++) {
      if (Number.isInteger(num / i)) {
          arr.push (i);
          answer += i;
      }
  }
  return answer;  
}

console.log(solution(12));