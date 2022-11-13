function solution(sides) {
    let count = 0;
    let larger = Math.max(...sides);
    let smaller = Math.min(...sides);

    for (let i = 1; i <= larger; i++) {
        if (i + smaller > larger) count++;
    }

    for (let i = larger + 1; i < larger + smaller; i++) {
        if (smaller + larger >= i) count++;
    }

    return count;
}

console.log(solution([3, 6]));