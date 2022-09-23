function countOne(num) {
    let count = 0, ejin = num.toString(2).split('');
    for(let i = 0; i < ejin.length; i++) {
        if (ejin[i] == 1) { count++; }
    }
    return count; 
}

function solution(n) {
    let testNum = n;
    while(true) {
        testNum++; 
        if(countOne(testNum) == countOne(n)) return testNum;
    }
}


/*
simpler solution -> 

function solution(n) {
    let oneNum = n.toString(2).split("1").length;
    while (true) {
      n++;
      if (n.toString(2).split("1").length === oneNum) return n;
    }
  }

test case -> 

console.log(solution(78));
console.log(solution(15));
console.log(solution(102552));
*/