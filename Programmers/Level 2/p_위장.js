//problem at : https://school.programmers.co.kr/learn/courses/30/lessons/42578#qna

function solution(clothes) {
    let outfit = 0,
        type = [];

    for(let i = 0; i < clothes.length; i++) {
        type.push(clothes[i][1]);
    }

    let counts = {};
    type.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

    let arr = [];
    for(let key in counts) {
        counts[key] += 1;
        arr.push(counts[key]);
    }

    for(let i = 0; i < arr.length; i++) {
        if(i === 0) outfit += arr[i];
        else {
            outfit *= arr[i];
        }
    }

    return outfit - 1;
}

