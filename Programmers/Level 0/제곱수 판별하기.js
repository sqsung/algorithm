function solution(n) {
    for(let i = 1; i < n/10; i++) {
        if(i * i === n) return 1;
    }
    
    return 2;
}