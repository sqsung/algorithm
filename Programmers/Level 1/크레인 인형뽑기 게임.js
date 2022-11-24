//problem at: https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(boards, moves) {
    let picked = [];
    let popped = 0;

    for (let i = 0; i < moves.length; i++) {
        let x = moves[i] - 1;
        let y = 0;

        while (true) {
            if (boards[y][x] !== 0) {
                if (!picked.length || picked[picked.length - 1] !== boards[y][x]) {
                    picked.push(boards[y][x]);
                    boards[y][x] = 0
                } else if (picked.length && picked[picked.length - 1] === boards[y][x]) {
                    picked.pop();
                    popped += 2;
                    boards[y][x] = 0
                }
                
                break;
            } else {
                y++;
                if (y > boards.length - 1) break;
            }
        } 
    }
    return popped;
}


// console.log(solution(
//     [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],
//     [1,5,3,5,1,2,1,4]
// ));
