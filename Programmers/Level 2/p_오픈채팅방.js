// problem at: https://school.programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
    let answer = [],
        inOutData = record.map(el => el.split(' '));

    let userInfo = {};
    for (let i = 0; i < inOutData.length; i++) {
        if (inOutData[i].length === 3) userInfo[inOutData[i][1]] = inOutData[i][2];
    }

    for(let i = 0; i < inOutData.length; i++) {        
        if(inOutData[i][0] === 'Enter') answer.push(`${userInfo[inOutData[i][1]]}님이 들어왔습니다.`)
        if(inOutData[i][0] === 'Leave') answer.push(`${userInfo[inOutData[i][1]]}님이 나갔습니다.`)
    }
    
    return answer;
}

console.log(solution(
    ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]	
))