function solution(n) {
    let pizza = 0;
    
    while(1){
        pizza++;
        if((6 * pizza) % n === 0) return pizza;
    }
}