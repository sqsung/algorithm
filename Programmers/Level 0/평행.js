function slope(p1, p2) {
    let changeX = p2[0] - p1[0];
    let changeY = p2[1] - p1[1];

    if (changeX === 0) return 0;
    if (changeY === 0) return 1;
    return changeY / changeX;
}

function solution(dots) {
    dots.sort((a,b) => a[0] - b[0]);

    if (
        slope(dots[0], dots[1]) === slope(dots[2], dots[3]) ||
        slope(dots[0], dots[2]) === slope(dots[1], dots[3]) ||
        slope(dots[0], dots[3]) === slope(dots[1], dots[2])
    ) return 1;
    return 0;
}

// console.log(solution([[1, 1], [5, 1], [1, 10], [3, 10]]))
// console.log(solution([[3, 5], [4, 1], [2, 4], [5, 10]]))