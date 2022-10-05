//can be found at: https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(num, limit) {
    let count = 0;
    num.sort((a,b) => a-b); 

    while(num.length) {
        count++; 

        let max = num.pop(); 
        let min = num[0];

        if(max + min <= limit) {
            num.splice(num.indexOf(min), 1);
        }
    }
    return count;
}

//note : using .shift() results in runtime error  

// console.log(solution([70,80,50], 100))
// console.log(solution([40,50,70,80,120], 210))