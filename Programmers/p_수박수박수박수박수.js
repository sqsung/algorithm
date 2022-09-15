function solution(n) {
    let answer = '';
    let str1 = "수", str2 = "박";

    let pointer = str1;
    while(n--) {
        answer += pointer;
        pointer == str1 ? pointer = str2 : pointer = str1; 
    }
      
    return answer;
}