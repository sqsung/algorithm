//problem at: https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
    let count = 0, countZero = 0;
    let chance = [];
    
    let rank = [6, 5, 4, 3, 2, 1];
    for(let i = 0; i < lottos.length; i++) {
        if(lottos[i] === 0) countZero++;
        for(let j = 0; j < win_nums.length; j++) {
            if(lottos[i] === win_nums[j]) count++; 
        }
    }
    if(count === 0 && countZero === 0) return [6, 6]; // no zero in lotto & no correct number 
    if(count === 0 || count === 1) chance.push(rank[count + countZero - 1], 6); 
    else chance.push(rank[count + countZero - 1], rank[count - 1]); 

    return chance;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]))
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]))
console.log(solution([38, 19, 20, 40, 15, 25], [38, 19, 20, 40, 15, 25]))
console.log(solution([38, 19, 20, 40, 15, 25], [1, 1, 1, 1, 1, 1]))