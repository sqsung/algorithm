// problem at : https://leetcode.com/problems/container-with-most-water

function maxArea(height) {
    let left = 0,
        right = height.length - 1,
        maxVolume = 0;

    while(left < right) {
        let curVolume = Math.min(height[left], height[right]) * (right - left);
        if(curVolume > maxVolume) maxVolume = curVolume;

        if(height[left] <= height[right]) {
            let searchLeft = left; 
            while(true) {
                searchLeft++;
                if(height[searchLeft] > height[left] || left < right) {
                    left = searchLeft;
                    break;
                }
            }
        } else if(height[right] < height[left]) {
            let searchRight = right; 
            while(true) {
                searchRight--;
                if(height[searchRight] > height[right] || left < right) {
                    right = searchRight;
                    break;
                }
            }
        } 
    }
    return maxVolume;
}

console.log(maxArea([1,2,4,3]));
console.log(maxArea([1,1]));
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([4,3,2,1,4]));
console.log(maxArea([1,0,0,0,0,0,0,2,2]));

/* correct but inefficient solution (time exceeded)

function maxArea(height) {
    let max = 0;
    
    for(let i = 0; i < height.length; i++) {
        let idx = i + 1;

        while(true) {
            if(idx > height.length - 1) break;

            
            if(height[idx] >= height[i] && (height[i] * (idx - i) > max)) max = height[i] * (idx - i);  
            else if(height[idx] < height[i] && (height[idx] * (idx - i) > max)) max = height[idx] * (idx - i);

            idx++;
            // console.log(`max - > ${max}`);
        }
    }
    return max
}

*/ 