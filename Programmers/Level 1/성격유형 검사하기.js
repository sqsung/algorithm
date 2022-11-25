// problem at: https://school.programmers.co.kr/learn/courses/30/lessons/118666

function solution(survey, choices) {
    let personality = '';
    let types = { R : 0, T : 0, C : 0, F : 0, J : 0, M : 0, A : 0, N : 0 };
    let scores = ['X', 3, 2, 1, 'X', 1, 2, 3];

    for (let i = 0; i < survey.length; i++) {
        let pick = choices[i];
        if (pick === 4) continue;

        if (pick === 1 || pick === 2 || pick === 3) types[survey[i][0]] += scores[pick];
        else if (pick === 5 || pick === 6 || pick === 7) types[survey[i][1]] += scores[pick];
    }   
    
    types['R'] >= types['T'] ? personality += 'R' : personality += 'T';
    types['C'] >= types['F'] ? personality += 'C' : personality += 'F';
    types['J'] >= types['M'] ? personality += 'J' : personality += 'M';
    types['A'] >= types['N'] ? personality += 'A' : personality += 'N';

    return personality;
}

// console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]))
// console.log(solution(["TR", "RT", "TR"], [7, 1, 3]))