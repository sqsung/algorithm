function solution(emergency) {
    let answer = [],
        obj = {};
    
    let temp = emergency.slice();
    temp.sort((a,b) => b-a);

    for(let i = 0; i < temp.length; i++) {
        obj[temp[i]] = i + 1;
    }
    
    for(let i = 0; i < emergency.length; i++) {
        answer.push(obj[emergency[i]]); 
    }
    return answer;
}

console.log(solution([3, 76, 24]))