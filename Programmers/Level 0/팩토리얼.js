function factorialize(num) {
    let result = num;
    if (num === 0 || num === 1) return 1; 
 
    while (num > 1) { 
        num--;
        result *= num;
    }
    return result;
}

function solution(n) {
    if(n === 1) return 1;
    if(n === 2) return 2;
    
    for(let i = 1; i <= n; i++) {
        if (factorialize(i) > n) return i - 1;
    }
}