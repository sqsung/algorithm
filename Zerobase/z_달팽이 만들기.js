function solution(length) {
  let result = [];
  
  for(let i = 0; i < length; i++) result.push([]);

  let x = -1, y = 0, num = 0;
  let direction = 1;

  while(true) {
    for(let i = 0; i < length; i++) {
      x += direction; 
      result[y][x] = ++num;
    }

    length--;
    if(length === 0) break;

    for(let j = 0; j < length; j++) {
      y += direction; 
      result[y][x] = ++num;
    } 

    direction *= -1;
  }
  return result;
}

console.log(solution(4));
console.log(solution(5));
console.log(solution(6));