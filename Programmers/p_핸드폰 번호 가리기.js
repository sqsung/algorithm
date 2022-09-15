function solution(phone_number) {
    let answer = '',
        preAns = [], 
        arr = phone_number.split(''),
        len = arr.length; 
    
    for(let i = 0; i < len; i++) {
        if (i < (len - 4)) {
            preAns.push("*");
        } else {
            preAns.push(arr[i]);
        }
        
        answer = preAns.join("");
    }
    
    return answer;
}