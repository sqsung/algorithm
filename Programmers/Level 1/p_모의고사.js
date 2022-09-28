//can be found at: https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answer) {
    let len = answer.length, a = [], b = [], c = [], result = [];

    // person 1 (a)
    let num = 1;
    for(let i = 1; i <= len; i++) {
        if(i <= 5) {
            a.push(num);
            num++;
        } else {
            num = num % 5;
            if (num === 0) {
                a.push(5);
                num++;
            } else {
                a.push(num);
                num++;
            }
        }
    }
    
    // person 2 (b)
    let num_b = 0;
    for(let i = 0; i < len; i++) {
        if(i % 2 === 0 || i === 0) b.push(2);
        else {
            num_b++;
            if (num_b === 2) num_b++;

            if (num_b <= 5) {
                b.push(num_b);
            }
            else {
                num_b = 1;
                b.push(num_b);
                num_b++;
            }
        }
    }
    
    // person 3 (c)
    let arr_C = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let index_C = 0;
    for(let i = 0; i < len; i++) {
        if (index_C <= len) {
            c.push(arr_C[index_C]);
            index_C++;
            if (index_C >= arr_C.length) index_C = 0;
        }
    }

    // finding the person with the most amount of correct answers
    let countA = 0; 
    let countB = 0; 
    let countC = 0; 
    for(let i = 0; i < answer.length; i++) {
        if(answer[i] === a[i]) {
            countA++;
        } 
        if(answer[i] === b[i]) {
            countB++;
        } 
        if(answer[i] === c[i]) {
            countC++; 
        }
    }

    let correct = new Array(countA, countB, countC);
    let best = Math.max(...correct);
    for(let i = 0; i < 3; i++) {
        if (i === 0 && correct[i] === best) {
            result.push(1);
        } 
        if (i === 1 && correct[i] === best) {
            result.push(2);
        }
        if (i === 2 && correct[i] === best) {
            result.push(3);
        }
    }
    return result.sort((a, b) => a - b);   
};

//console.log(solution([1,3,2,4,2,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1]))