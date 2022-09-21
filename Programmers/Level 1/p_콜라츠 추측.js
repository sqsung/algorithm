function solution(num) {
  let answer = 0;
  
  for(i = 0; i < 500; i++) {
      if(num === 1) {
          break;
      } 
      if(num % 2 === 0) {
          num = num/2;
          answer++;
      } else {
          num = num * 3 + 1;
          answer++;
      }
      if (i >= 499) {
          answer = -1;
      }
  }
  return answer;
}