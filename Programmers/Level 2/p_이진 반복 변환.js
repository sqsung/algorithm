function solution(s) {
    let answer = [], temp = [], count = 0, countZero = 0, len = 0;
   
    while (len !== 1) {
        for(let i = 0; i < s.length; i++) {
            if (s[i] == 0) {
                countZero++; 
            } else if (s[i] == 1) { 
                temp.push(s[i]);
            }
        }
        count++;
        len = temp.length; 
        s = len.toString(2);
        temp = [];
    }   
    answer.push(count);
    answer.push(countZero);

    return answer;
}

//console.log(solution("110010101001"));