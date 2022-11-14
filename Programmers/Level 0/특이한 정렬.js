function solution(numlist, n) {
    let sorted = [];
    let answer = [];
    
    function fromN (num) {
        return Math.abs(n - num);
    }
    
    function NCompared(value) {
        this.value = value;
        this.toN = fromN(value);
    }

    numlist.sort((a,b) => b-a);

    for (let i = 0; i < numlist.length; i++) {
        let el = new NCompared(numlist[i]);
        sorted.push(el);
    }

    sorted.sort((a,b) => a.toN - b.toN);
    

    for (let i = 0; i < sorted.length; i++) {
        answer.push(sorted[i].value);
    }

    return answer;
}

// console.log(solution([10,9,8,7,6,5,4,3,2,1,11], 6));