//problem at: https://school.programmers.co.kr/learn/courses/30/lessons/17679

class Block {
  constructor(value, org) {
    this.value = value;
    this.org = org;
  }
}

function replaceBoard(arr) {
  let newBoard = [];
  for (let i = 0; i < arr.length; i++) {
    newBoard.push(arr[i].split('').map(el => new Block(el, el)));
  }
  return newBoard;
}

function popBlock(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === undefined) continue; 
      if (!arr[i][j + 1]) continue;

      let val = arr[i][j].org;
      if (arr[i][j + 1].org === val && arr[i + 1][j].org === val && arr[i + 1][j + 1].org === val) {
        arr[i][j].value = '/';
        arr[i + 1][j].value = '/';
        arr[i + 1][j + 1].value = '/';
        arr[i][j + 1].value = '/';
      }
    }
  }
  return arr;
}

function moveDown(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (!arr[i][j] || arr[i][j].value !== '/') continue;
      count++;
      let idx = i;
      if (arr[idx - 1]) {
        while (arr[idx - 1]) {
          arr[idx][j] = arr[idx - 1][j];
          arr[idx - 1][j] = arr[idx - 2] ? arr[idx - 2][j] : undefined;
          idx--; 
        }
      } else arr[idx][j] = undefined;
    }
  }
  return [count, arr];
}

function solution(m, n, board) {
  let replaced, popped, moved;
  let answer = 0;
  
  function firstRound (board) {
    replaced = replaceBoard(board);
    popped = popBlock(replaced);
    moved = moveDown(popped);
    return moved;
  }
  
  firstRound(board);
  answer += moved[0];

  while (moved[0] > 0) {
    popped = popBlock (moved[1]);
    moved = moveDown(popped);
    answer += moved[0];
  }
  return answer;
}

// console.log(solution(4, 5, ['CCBDE','AAADE','AAABF','CCBBF'])); // 14
// console.log(solution(6,6,["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])) // 15
// console.log(solution(2, 4, ["baab", "baab"])); // 4