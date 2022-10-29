function solution(babbling) {
    let count = 0,
        obj = {};
    
    obj['aya'] = 1, obj['ye'] = 2, obj['woo'] = 3, obj['ma'] = 4;

    for(let i = 0; i < babbling.length; i++) {
        let temp = babbling[i]
            .replaceAll('aya', obj['aya'])
            .replaceAll('ye', obj['ye'])
            .replaceAll('woo', obj['woo'])
            .replaceAll('ma', obj['ma']);
        
        if(!isNaN(Number(temp))) count++;
    }
    return count;
}

console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]))