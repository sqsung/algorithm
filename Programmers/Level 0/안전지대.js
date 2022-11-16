function solution(board) {
    let result = 0
    for(let i = 0 ; i < board.length ; i ++) {
        for(let j = 0 ; j < board[i].length ; j ++) {
            if(board[i][j] === 1) {
                if(i !== 0 && board[i - 1][j] !== 1) board[i-1][j] = 'X';
                if(i !== board.length - 1 && board[i+1][j] !== 1) board[i+1][j] = 'X';
                if(j !== 0 && board[i][j-1] !== 1) board[i][j-1] = 'X';
                if(j !== board[i].length-1 && board[i][j+1] !== 1) board[i][j+1] = 'X';
                if(i !== 0 && j !== 0 && board[i-1][j-1] !== 1) board[i-1][j-1] = 'X';
                if(i !== 0 && j !== board[i].length-1 && board[i-1][j+1] !== 1) board[i-1][j+1] = 'X';
                if(i !== board.length-1 && j !== 0 && board[i+1][j-1] !== 1) board[i+1][j-1] = 'X';
                if(i !== board.length-1 && j !== board[i].length-1 && board[i+1][j+1] !== 1) board[i+1][j+1] = 'X';
            }
        }
    }
    board.forEach(a => a.forEach(b => b === 0 ? result++ : null))
    return result
}