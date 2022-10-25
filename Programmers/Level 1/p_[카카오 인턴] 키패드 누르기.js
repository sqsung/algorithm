//problem at: https://school.programmers.co.kr/learn/courses/30/lessons/67256

function keyIs(x) {
    let phone = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
        ['*', '0', '#']
    ];

    for(let i = 0; i < phone.length; i++) {
        for(let j = 0; j < phone[i].length; j++) {
            if(phone[i][j] == x) return [i, j];
        }
    }
}

function solution(numbers, hand) {
    let answer = '',
        L = '*',
        R = '#';

    for(let i = 0; i < numbers.length; i++) {
        let str = numbers[i].toString();

        //1. when numbers[i] is only pushable with a certain hand 
        if(str === '1' || str === '4' || str == '7') {
            answer += 'L';
            L = str;
        } else if(str === '3' || str === '6' || str === '9') {
            answer += 'R';
            R = str;
        }

        //2. when numbers[i] is in the middle 
        else {
            let leftIdx = keyIs(L); 
            let rightIdx = keyIs(R);
            let strIdx = keyIs(str);
            let leftSteps = Math.abs(leftIdx[0] - strIdx[0]) + Math.abs(leftIdx[1] - strIdx[1]);
            let rightSteps = Math.abs(rightIdx[0] - strIdx[0]) + Math.abs(rightIdx[1] - strIdx[1]);

            if(leftSteps > rightSteps) {
                answer += 'R';
                R = str;
            } else if(rightSteps > leftSteps) {
                answer += 'L';
                L = str; 
            } else if(rightSteps === leftSteps) {
                if(hand === 'left') {
                    answer += 'L';
                    L = str;
                } else {
                    answer += 'R';
                    R = str;
                }
            }
        }
    }
    return answer; 
}


// console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));