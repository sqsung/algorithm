//problem at: https://leetcode.com/problems/elimination-game/

function lastRemaining(n) {
    let x = 1,
        len = n, 
        dir = true,
        diff = 1;
    
    while(len > 1) {
        if(dir || len % 2 === 1) {
            x += diff; 
        }

        len = parseInt(len/2); 
        diff *= 2;
        dir = !dir; 
    }

    return x;
}

/* TC
console.log(lastRemaining(10));
console.log(lastRemaining(5));
*/


/* correct but runtime error 
function lastRemaining(n) {
    let arr = [],
        temp = [],
        dir = 0;

    if(n === 1) return 1;

    for(let i = 2; i <= n; i += 2) {
        arr.push(i);
    }

    while(arr.length > 1) {
        if(dir === 1) {
            for(let i = 1; i < arr.length; i += 2) {
                temp.push(arr[i]);
            }
            dir--;
        } else if (dir === 0) {
            for(let i = arr.length - 2; i >= 0; i -= 2) {
                temp.push(arr[i]);
            }
            temp = temp.reverse();
            dir++; 
        }
        arr = temp;
        temp = [];
    }
    return arr[0];
}
*/
