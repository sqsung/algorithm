function solution(array, commands) {
  var answer = [];
  
  for(let n = 0; n < commands.length; n++) {
      let i = commands[n][0];
      let j = commands[n][1];
      let k = commands[n][2];
     
      let newArr = array.slice(i - 1, j);
      console.log(newArr);
      newArr.sort((a, b) => a - b);
      answer.push(newArr[k - 1]);        
  }  
  return answer;
}

//console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));

