function solution(numbers, k) {
    let index = 0;
    
    while(--k) {
        index = (index + 2) % numbers.length;
    }

    return numbers[index];
}