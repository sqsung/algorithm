function solution(n) {
    let ans = [0, 1]; 
    if(n < 2) {
        return ans[n];
    }
    for(let i = 2; i <= n; i++) {
        ans.push((ans[i - 2] + ans[i - 1]) % 1234567);
    }
    
    return ans[n];
}

/*
console.log(solution(5)); wanted output: 5
console.log(solution(3)); wanted output: 3 
*/