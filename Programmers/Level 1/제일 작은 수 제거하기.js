function solution(arr) {
    let result = [];
        
    for(let i = 0; i < arr.length; i++) {
        if (arr.length <= 1) {
            result.push(-1); 
            break;
        }
        if(arr[i] === Math.min(...arr)) {
            delete arr[i];
        } else {
            result.push(arr[i]);
        }
   }
   return result; 
}