function solutioN(brown, yellow) {
    let answer = [], width = 0, totalSpace = brown + yellow;
    
    for(let i = 3; i <= totalSpace; i++) {
        if (totalSpace % i === 0) {
            width = totalSpace / i; 
            if ((i - 2) * (width - 2) === yellow) {
                answer.push(width);
                answer.push(i);
            }
        }
    }
    return answer;
}