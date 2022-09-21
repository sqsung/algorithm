function solution(n, m) {
    let answer = [],
        temp = [];
    
    for(let i = 1; i <= n; i++) {
        if(n%i === 0 && m%i === 0) {
            temp.push(i);            
        }
    }
    answer.push(Math.max(...temp));
    let multi = m;
    
    
    while(multi++) {
        if (m % n === 0) {
            answer.push(m);
            break;
        } 
        
        if (multi%n === 0 && multi%m === 0) {
            answer.push(multi);
            break;
        }
    }
    return answer;
}