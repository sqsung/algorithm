function solution(quiz) {
    let answer = [];
    
    for(let i = 0; i < quiz.length; i++) {
        let spl = quiz[i].split(' = ');
        let evaluated = (eval(spl[0]));
        if (evaluated === Number(spl[1])) answer.push('O');
        else answer.push('X');
    }
    return answer;
}

// console.log(solution(["3 - 4 = -3", "5 + 6 = 11"]))