//problem at: https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
    participant.sort();
    completion.sort();

    for(let i = 0; i < participant.length; i++) {
        if(participant[i] !== completion[i]) return participant[i];
    }
}


/* 2nd try -> correct, but fails the efficiency test. tried with localeCompare and worked. 
function solution(participant, completion) {
    participant.sort((a,b) => a.localeCompare(b));
    completion.sort((a,b) => a.localeCompare(b));

    for(let i = 0; i < participant.length; i++) {
        if(participant[i] !== completion[i]) return participant[i];
    }
}

/* 1st try -> correct, but doesn't pass the efficiency test 
function solution(participant, completion) {
    let len = completion.length; 

    for(let i = 0; i < len; i++) {
        let x = completion[0];
        completion.splice(0, 1);

        if(participant.includes(x)) {
            participant.splice(participant.indexOf(x), 1);
        }
    }
    return participant.join('');
}
*/

//console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));
