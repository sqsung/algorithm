function solution(num) {
    let max = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < num.length; i++) {
        for(let j = i + 1; j < num.length; j++) {
            if(num[i] * num[j] > max) max = num[i] * num[j];
        }
    }
    return max;
}
