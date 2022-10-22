function solution(num, dir) {
    if(dir === 'left') num.push(num.shift());
    else num.unshift(num.pop());

    return num;    
}