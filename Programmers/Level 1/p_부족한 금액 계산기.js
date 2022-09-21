function solution(price, money, count) {
    let weightedPrice = 0,
        answer = 0;
    
    for(let i = 1; i <= count; i++){
        weightedPrice += price * i;
    }
    money > weightedPrice ?  answer = 0 : answer = Math.abs(money - weightedPrice);
    return answer;
}