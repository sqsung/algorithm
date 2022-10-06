//problem at: https://leetcode.com/problems/min-max-game/

function minMaxGame(nums) {
    let temp = [],
        minOrMax = 1;

    if(nums.length === 1) return nums[0];

    while(nums.length > 1) {
        for(let i = 0; i < nums.length; i += 2) {
            let index = i + 1;

            if(minOrMax === 1) {
                temp.push(Math.min(nums[i], nums[index]));
                minOrMax++;
            } else {
                temp.push(Math.max(nums[i], nums[index]));
                minOrMax--;
            }

            if(index === nums.length - 1) break;
        }

        nums = temp;
        temp = [];
    }
    
    return nums[0];
}

/* ---- test cases -----
console.log(minMaxGame([70,38,21,22]));
console.log(minMaxGame([1,3,5,2,4,8,2,2]));
*/