function solution(my_string) {
    const splitted = my_string.split(" ");
    
    let answer = Number(splitted[0]);
    
    splitted.forEach((item, index) => {
        if(item === "+"){
            answer += Number(splitted[index + 1]);
        }
        
        if(item === "-"){
            answer -= Number(splitted[index + 1]);
        }
    })
    
    return answer;
}
