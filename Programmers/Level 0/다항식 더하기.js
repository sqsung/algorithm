function solution(p) {
    const isX = (str) => {
        let count = 0;
        let spl = str.split(' ');

        for (let i = 0; i < spl.length; i++) {          
            if (spl[i].includes('x')) {
                if (spl[i].length === 1) count++;
                let noX = spl[i].split('').slice(0, spl[i].indexOf('x'));
                count += Number(noX.join(''));                
            }            
        }    
        return count === 0 ? 0 : count === 1 ? 'x' : `${count}x`;
    }

    const isNum = (str) => {
        let sum = 0;
        let spl = str.split(' + ');

        for (let i = 0; i < spl.length; i++) {
            if (!spl[i].includes('x')) {
                sum += Number(spl[i]);
            }
        }
        return sum;
    }

    let temp = [];
    isX(p) === 0 ? temp : temp.push(isX(p));
    isNum(p) === 0 ? temp : temp.push(isNum(p));
    return temp.join(' + ');
}

// console.log(solution("3x + 71x + x"))
// console.log(solution("x + x + x"))
// console.log(solution("2x + 2x + 3x"))
// console.log(solution("1 + 1 + x"))
// console.log(solution("1 + 1x + 1 + x"))
// console.log(solution("10x + 20x + 10x"))