function solution(denum1, num1, denum2, num2) {
    let numerator = denum2 * num1 + denum1 * num2;
    let denominator = num1 * num2; 
    let lcm = 1;

    for(let i = 1; i <= numerator; i++) {
        if (numerator % i === 0 && denominator % i === 0) {
            lcm = i;
        }
    }

    return [numerator/lcm, denominator/lcm];
}

// console.log(solution(5, 100, 1, 10));