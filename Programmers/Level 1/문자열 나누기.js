//problem at: https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution(str) {
    let answer = 0, match = 0, nonMatch = 0, spl = str.split(''), first = spl[0];
    if (spl.length === 1) return 1;

    for(let i = 0; i < spl.length; i++) {
        if (spl[i] === first) match++;
        else if (spl[i] !== first) nonMatch++;

        if (match !== nonMatch) continue;
        answer++;
        match = 0;
        nonMatch = 0;
        first = spl[i + 1];
    }

    let spliced = spl.splice(0, spl.lastIndexOf(first));
    spliced.length > 0 ? answer++ : answer; 
    return answer;
}


// console.log(solution("abracadabra"));
// console.log(solution("banana"));
// console.log(solution("aaabbaccccabba"));
// console.log(solution("a"));