function solution(s) {
    let answer = true;
    let arr = s.split('').map(str => Number(str));
      
  
    for(let i = 0; i < arr.length; i++) {
        if(arr.length !== 4 && arr.length !== 6) {
          answer = false;
          break;
        }
        
        if (Number.isNaN(arr[i])) {
        answer = false; 
        break;
      } 
      
    }
    return answer;
  }