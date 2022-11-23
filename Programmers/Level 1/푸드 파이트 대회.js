// problem at: https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food) {
    let foodType = food.length - 1;
    let foodOrder = [];
    let answer = '';

    for (let i = 1; i <= foodType; i++) {
        if (food[i] < 2) continue;
        else {
            let eachPlayerEats = Math.floor(food[i] / 2);
            while(eachPlayerEats--) {
                foodOrder.push(i);
            }
        }
    }
    let second = foodOrder.slice().reverse()
    foodOrder.push(0);
    let combined = foodOrder.concat(second);

    for (let i = 0; i < combined.length; i++) {
        answer+= combined[i];
    }

    return answer;
}

console.log(solution([1, 3, 4, 6])); // '1223330333221'
console.log(solution([1, 7, 1, 2])); // "111303111"