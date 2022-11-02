function solution(str) {
    let arr = str.split('');
    let set = [...new Set(arr)];
    return set.join('');
}