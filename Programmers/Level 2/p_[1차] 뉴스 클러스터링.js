function solution(str1, str2) {
    let arr1 = [], 
        arr2 = [];

    str1 = str1.toUpperCase();
    str2 = str2.toUpperCase();
    
    for (let i = 0; i < str1.length - 1; i++) {
        const str = str1.substr(i, 2);
        if (str[0] >= "A" && str[0] <= "Z" && str[1] >= "A" && str[1] <= "Z") arr1.push(str);
    }

    for (let i = 0; i < str2.length - 1; i++) {
        const str = str2.substr(i, 2);
        if (str[0] >= "A" && str[0] <= "Z" && str[1] >= "A" && str[1] <= "Z") arr2.push(str);
    }
  
    let intersection = [],
        union = [];

    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) >= 0) intersection.push(arr1.splice(arr1.indexOf(arr2[i]), 1));
        union.push(arr2[i]);
    }
  
    for (let i = 0; i < arr1.length; i++) {
        union.push(arr1[i]);
    }

    if (intersection.length === 0 && union.length === 0) return 65536;
    return parseInt(65536 * (intersection.length / union.length));
};


console.log(solution('FRANCE', 'french'));
console.log(solution("aa1+aa2", "AAAA12"));
console.log(solution("aa1+aa2bb+)_)- 0 bb )()( bb", "AAAA12   bb   99 bb 00 bbbb"));





