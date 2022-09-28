function solution(sizes) {
    let x = [], y = [];

    for(let i = 0; i < sizes.length; i++) {
        x.push(Math.max(...sizes[i]));
        y.push(Math.min(...sizes[i]));
    }
    return (Math.max(...x)) * (Math.max(...y));
}

/*
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]))
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]))
console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))
*/