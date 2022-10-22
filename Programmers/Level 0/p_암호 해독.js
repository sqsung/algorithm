function solution(cipher, code) {
  let answer = '';
  let flag = 0; 
  
  for(let i = 0; i < cipher.length; i++) {
      flag++; 
      if(flag === code) {
          answer += cipher[i];
          flag = 0;
      }    
  
  }
  return answer;
}