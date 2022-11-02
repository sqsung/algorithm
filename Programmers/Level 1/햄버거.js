function solution(ingredient) {
    let hamburger = 0;
    let temp = [];
    let index = -1;

    for(let i = 0; i < ingredient.length; i++) {
        temp.push(ingredient[i]);
        index++; 
        if (temp[index] === 1 && temp[index - 1] === 3 && temp[index - 2] === 2 && temp[index - 3] === 1) {
            temp.pop();
            temp.pop();
            temp.pop();
            temp.pop();
            hamburger++;
            index -= 4;
        }
    }
    return hamburger;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]));
console.log(solution([1,2,1,2,3,1,3,1,2,3,1,2,3,1]));

/* time limit exceeded
function solution(ingredient) {
    let hamburger = 0;
    let str = ingredient.map(num => num.toString()).join('');

    while(true) {
        let len = str.length;
        let replaced = str.replace('1231', '');
        if(replaced.length === len) break;
 
        hamburger++;
        str = replaced;
    }
    
    return hamburger;
}
*/