function solution(citations) {
    let hIndex = 0;

    citations.sort((a,b) => b-a);

    for(let i = 0; i < citations.length; i++) {
        if(i < citations[i]) hIndex++;
    }
    return hIndex;
}

console.log(solution([4, 1]));
console.log(solution([6, 5, 3, 1, 2, 0, 4]));
console.log(solution([2, 2, 2, 2, 2, 2]));
