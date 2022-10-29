//problem at: https://school.programmers.co.kr/learn/courses/30/lessons/133499

function solution(babbling) {
    let count = 0,
        strChecker = 0,
        obj = {};
    
    obj['aya'] = 1, obj['ye'] = 2, obj['woo'] = 3, obj['ma'] = 4;

    for(let i = 0; i < babbling.length; i++) {
        let temp = babbling[i]
            .replaceAll('aya', obj['aya'])
            .replaceAll('ye', obj['ye'])
            .replaceAll('woo', obj['woo'])
            .replaceAll('ma', obj['ma']);
        
        if(!isNaN(Number(temp))) {
            let str = temp.toString().split('');
            for(let j = 0; j < str.length; j++) {
                if(str[j] !== str[j + 1]) strChecker++;
            }
            strChecker === str.length ? count++ : count;  
            strChecker = 0;
        }
    }
    return count
}

console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]))
