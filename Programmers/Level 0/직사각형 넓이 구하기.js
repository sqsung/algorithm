function difX(dots) {
    let arr = [];
    for (let i = 0; i < dots.length; i++) {
        arr.push(dots[i][0]);        
    }
    return difX = Math.max(...arr) - Math.min(...arr);
}

function difY(dots) {
    let arr = [];
    for (let i = 0; i < dots.length; i++) {
        arr.push(dots[i][1]);
    }
    return difY = Math.max(...arr) - Math.min(...arr);
}

function solution(dots) {
    let x = difX(dots);
    let y = difY(dots);

    return x * y;
}