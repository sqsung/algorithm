//problem at: https://school.programmers.co.kr/learn/courses/30/lessons/76502

function parenthCheck(arr) {
    let temp = [];

    for(let j = 0; j < arr.length; j++) {        
        if(arr[0] === ')' || arr[0] === ']' || arr[0] === '}') return false;
        
        if(arr[j] === '(' || arr[j] === '[' || arr[j] === '{') temp.push(arr[j]); 

        if(arr[j] === '}' && temp[temp.length - 1] === '{') temp.pop();
        else if(arr[j] === ']' && temp[temp.length - 1] === '[') temp.pop();
        else if(arr[j] === ')' && temp[temp.length - 1] === '(') temp.pop();
    }

    return temp.length === 0 ? true : false; 
}

function solution(s) {
    let arr = [], count = 0;
    
    for(let i = 0; i < s.length; i++) {
        arr.push(s[i]);
    }

    if(parenthCheck(arr) === true) count++;

    for(let i = 1; i < arr.length; i++) {
        arr.push(arr[0]);
        arr.shift();
        
        if(parenthCheck(arr) === true) count++;
    }
    return count;
}

