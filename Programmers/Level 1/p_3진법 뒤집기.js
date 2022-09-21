function solution(n) {
    let temp = n.toString(3).split('').reverse().join('');
    return parseInt(temp, 3);
}

//console.log(solution(45)); > wanted output: 7