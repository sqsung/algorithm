// let nums = [1,3,8,-2,2];
// let nums = [0, 0, -1];

let [N, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let nums = input.map(val => +val);
let avg = Math.round(nums.reduce((acc, cur) => acc + cur) / nums.length); 
let med = nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)];
let dif = Math.max(...nums) - Math.min(...nums);

function getHighestOccurence() {
    const map = new Map();
    for (let i in nums) {
        if (!map.has(nums[i])) map.set(nums[i], 1) ;
        else map.set(nums[i], map.get(nums[i]) + 1);
    }

    let maxValue = 0;
    let nums2 = [];
    map.forEach((ele, key) => {
        if (maxValue < ele) {
            maxValue = ele;
            nums2 = []; 
            nums2.push(key); 
        } else if (maxValue === map.get(key)) {
            nums2.push(key); 
        }
    })

    return nums2.length !== 1 ? nums2[1] : nums2[0]; 
}

avg === -0 ? console.log(0) : console.log(avg);
console.log(med);
console.log(getHighestOccurence());
console.log(dif);