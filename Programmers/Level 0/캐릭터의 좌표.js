function solution(keyinput, board) {
    let start = [0, 0];
    let maxX = Math.floor(board[0] / 2);
    let maxY = Math.floor(board[1] / 2);
    const key = {
        up: 1,
        down: -1,
        left: -1,
        right: 1,
    };

    console.log(maxX, maxY)
    console.log(-maxX, -maxY)
    for(let i = 0; i < keyinput.length; i++) {
        if (keyinput[i] === 'left' || keyinput[i] === 'right') {
            let v = start[0] + key[keyinput[i]];
            if (v <= maxX && v >= -maxX) start[0] += key[keyinput[i]];
        } else {
            let v = start[1] + key[keyinput[i]];
            if (v <= maxY && v >= -maxY) start[1] += key[keyinput[i]];
        }
    }

    return start;
}

// console.log(solution(["left", "right", "up", "right", "right"], [11, 11]))
// console.log(solution(["down", "down", "down", "down", "down"], [7, 9]))
// console.log(solution(["left", "left", "left", "right"], [3, 3]))
