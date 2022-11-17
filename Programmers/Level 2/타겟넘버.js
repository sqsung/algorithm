function solution(numbers, target) {
    let count = 0;
    
    const dfs = (index, sum) => {
        if(index === numbers.length) {
            if (sum === target) count++;
            return;
        } else {
            dfs(index + 1, sum + numbers[index]);
            dfs(index + 1, sum - numbers[index]);
        }
    }
    
    dfs(0, 0);

    return count;
}

console.log(solution([1, 1, 1, 1, 1], 3));