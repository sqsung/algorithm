//can be found at: https://leetcode.com/problems/pascals-triangle/

function generate(numRows) {
    let res = [],
        count = 0;

    while(count < numRows) {
        if(count === 0) {
            res.push([1]);
            count++;
            continue;
        }
        else if(count === 1) {
            res.push([1, 1]);
            count++;
            continue;
        }
        else {
            let temp = [];

            for(let i = 0; i < count; i++) {
                let index = i + 1
                if(index === count) break;
                temp.push(res[res.length - 1][index] + res[res.length - 1][i]);
            }
            temp.unshift(1);
            temp.push(1);
            res.push(temp);
            temp = [];
            count++;
        }
    }
    return res;
}

console.log(generate(5));