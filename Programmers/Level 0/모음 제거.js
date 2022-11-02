function solution(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let arr = str.split('');
    let answer = '';
    
    for(let i=0; i < arr.length; i++) {
        if(!vowels.includes(arr[i])) answer+=arr[i];
    }
    
    return answer;
}