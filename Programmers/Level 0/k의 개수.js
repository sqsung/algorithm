function solution(i, j, k) {
    let answer = 0;
    for(let v = i; v <= j; v++) {
        let splited = v.toString().split('') 
        for(let z = 0; z < splited.length; z++) {
            if(splited[z] === k.toString()) answer++;
        }
    }
    return answer;
}