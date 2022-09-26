function toSharp(num, n) {
    let numArr = num.toString(2).split(''), answer = [];

    if (numArr.length < n) {
        while(numArr.length < n) { numArr.unshift(0); }
    } else if (numArr.length > n) {
        while(numArr.length > n) { numArr.pop(); }
    }

    for(let i = 0; i < numArr.length; i++) {
        if (numArr[i] == 1) answer.push('#');
        else answer.push(' ');
    }
    return answer;
}

function solution(n, arr1, arr2) {
    let result = [];
    //2차원 배열 만들기 (n수에 의해)
    for(let i = 0; i < n; i++) {
        result.push([]);
    }

    let arr_x = [], arr_y = [];

    //arr1 처리
    for(let i = 0; i < arr1.length; i++) {
        arr_x.push(toSharp(Number(arr1[i]), n));
    }
    //arr2 처리 
    for(let i = 0; i < arr2.length; i++) {
        arr_y.push(toSharp(Number(arr2[i]), n));
    }
    //arr1 and arr2 비교 
    for(let i = 0; i < arr_x.length; i++) {
        for(let j = 0; j < arr_x[i].length; j++) {
            if (arr_x[i][j] == ' ' && arr_y[i][j] == '#') {
                result[i].push('#');
            } else if (arr_x[i][j] == ' ' && arr_y[i][j] == ' ') {
                result[i].push(' ');
            } else if (arr_x[i][j] == '#' && arr_y[i][j] == '#') {
                result[i].push('#');
            } else if (arr_x[i][j] == '#' && arr_y[i][j] == ' ') {
                result[i].push('#');
            }
        }
    }
    let newResult = [];
    for(let i = 0; i < result.length; i++) {
        newResult.push(result[i].join(''));
    }
    return newResult;
}

//console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));