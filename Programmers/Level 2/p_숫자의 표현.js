function solution(n) {
    var sum = 0, count = 0, index = 1, candidate = [];
    
    for(let i = 1; i <= n; i++) {
        candidate.push(i);
    }
    
    for(let i = 0; i < candidate.length; i++) {
        sum += candidate[i];
        while(sum < n) {
            sum += candidate[i + index]
            index++;
            if (sum === n) { break; }
        }
   
        if (sum === n) { 
            count++;
        }
        
        index = 1;
        sum = 0;
    }
    return count;
}

//console.log(solution(15)); wanted output: 4
