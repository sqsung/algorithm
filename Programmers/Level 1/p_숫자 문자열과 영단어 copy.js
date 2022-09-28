//prolem found at: https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  s = s
    .replace(/zero/g, 0)
    .replace(/one/g, 1)
    .replace(/two/g, 2)
    .replace(/three/g, 3)
    .replace(/four/g, 4)
    .replace(/five/g, 5)
    .replace(/six/g, 6)
    .replace(/seven/g, 7)
    .replace(/eight/g, 8)
    .replace(/nine/g, 9);
  return parseInt(s);
}

//console.log(solution('two12seveneight91923910zero03two11seven11one1eight34'));
