function solution(A, B) {
    let count = 0;
    let a = A.split('');
    let b = B.split('');

    while (a.join('') !== b.join('')) {
        a.unshift(a.pop());
        count++;
        if (count === A.length) return -1;
    }       
    
    return count;   
}

// console.log(solution("apple", "elppa"));
// console.log(solution("hello", "ohell"));
