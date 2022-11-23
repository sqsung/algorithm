function solution(lines) {
    let obj = {};
    let range = [];
    let firstRange = [];
    let secondRange = [];

    for (let i = 0; i < lines.length; i++) {
        for (let j = Math.min(...lines[i]); j <= Math.max(...lines[i]); j++) {
            range.push(j);
        }
        
        if (firstRange[firstRange.length - 1] === range[0]) range.splice(0, 1);
        else if (firstRange.length < 1 || firstRange[firstRange.length - 1] !== range[0]) range;

        if (secondRange[secondRange.length - 1] === range[0]) range.splice(0, 1);
        else if (secondRange.length < 1 || secondRange[secondRange.length - 1] !== range[0]) range;

        for (let k = Math.min(...range); k <= Math.max(...range); k++) {
            if (!obj[k]) obj[k] = 'X';
            else if (obj[k] === 'X') obj[k] = 'O';
        }

        if (i === 0) firstRange = range.slice();
        else secondRange = range.slice();
        range = [];
    }

    let consecutive = 0;
    let count = 0;

    for (const key in obj) {
        if (obj[key] === 'O') count++; 
        if (obj[key] === 'X' && obj[`${Number(key) - 1}`] === 'O') consecutive++;
        else if (obj[key] === 'O' && obj[`${Number(key) + 1}`] === undefined) consecutive++;
    }

    return count - consecutive;
}

// console.log(solution([[-5, -2], [-4, -3], [-2, 5]]));
// console.log(solution([[0, 1], [2, 5], [3, 9]]))
// console.log(solution([[-1, 1], [1, 3], [3, 9]]))
// console.log(solution([[0, 5], [3, 9], [1, 10]]))
// console.log(solution([[-2, 2], [-1, 3], [-5, 0]]))
// console.log(solution([[1, 10], [2, 4], [8, 11]]));
// console.log(solution([[-10, -1], [-9, -1], [-8, -1]]));
// console.log(solution([[0, 2], [1, 2], [3, 4]]));
// console.log(solution([[-1, 0], [0, 1], [1, 2]]));