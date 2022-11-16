function solution(common) {
    let magicNumber = 1;
 
    function check(arr) {
        return arr[2] - arr[1] === arr[1] - arr[0] ? true : false;
    }
    
    return check(common)
        ? common[common.length - 1] + (common[1] - common[0])
        : common[common.length - 1] * (common[1] / common[0])
}
