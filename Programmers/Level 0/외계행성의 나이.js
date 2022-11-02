function solution(age) {
    let answer = '';
    let alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ]
    
    let arr = age.toString().split('')
    
    for(let i = 0; i < arr.length; i++) {
        answer += alphabet[arr[i]];
    }
    
    return answer;
}