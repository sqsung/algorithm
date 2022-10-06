//problem at: https://leetcode.com/problems/find-triangular-sum-of-an-array/

function triangularSum(nums) {
    let temp = [],
        count = nums.length - 1;

    if(nums.length === 1) {
        return nums[0];
    }

    while(true) {
        for(let i = 0; i < nums.length; i++) {
            let index = i + 1;
            if(index === nums.length) break;
            temp.push((nums[i] + nums[index]) % 10);
        }
        nums = temp;
        temp = [];

        count--;
        if(count === 0) break;
    }
    return nums[0];
}

/* test cases 
console.log(triangularSum([1,2,3,4,5]));
console.log(triangularSum([5])) <-- when input length is 1, original function did not work
*/