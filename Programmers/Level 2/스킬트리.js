//https://school.programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, trees) {
    let tmp = [];
    let sk = skill.split('');
    
    for (let i = 0; i < trees.length; i++) {
        let x = trees[i].split('').filter(el => sk.includes(el));
        for (let j = 0; j < x.length; j++) {
            if (x[j] === sk[j]) continue;
            tmp.push(0);
            break;
        }
    }
    return trees.length - tmp.length;
}

// console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));