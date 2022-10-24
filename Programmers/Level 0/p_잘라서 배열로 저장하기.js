function solution(str, n) {
    let temp = '',
        arr = [];

    for(let i = 0; i < str.length; i++) {
        if (i % n === 0 && i !== 0) {
            arr.push(temp);
            temp = '';
        } 
        temp += str[i];
    }
    if(temp.length > 0) arr.push(temp);    
    return arr;
}