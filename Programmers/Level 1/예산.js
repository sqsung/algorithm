function solution(d, budget) {
  var answer = 0, sum = 0;
  
  d.sort((a, b) => a - b);
  let leftover = d.reduce((a, b) => a + b);
   
  for(let i = 0; i < d.length; i++) {
      if(budget > d[i]) {
          budget -= d[i]; 
          answer++;
      } else if (budget < d[i]) {
          return answer; 
      } else if (budget = d[i]) {
          answer++;
          return answer;
      }
  }
  return answer;
}