//problem at: https://school.programmers.co.kr/learn/courses/30/lessons/72410

// 1. The fun solution
const f1 = spl => spl.map(char => char.toLowerCase());

const f2 = spl => {
    for (let i = 0; i < spl.length; i++) {
        let x = spl[i];
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const allowed = ['-', '.', '_'];

        if (!alphabet.includes(x) && !nums.includes(x) && !allowed.includes(x)) {
            spl.splice(i, 1);
            i--;
        }
    }
    return spl;
}

const f3 = spl => {
    for (let i = 0; i < spl.length; i++) {
        if (spl[i] === '.' && spl[i + 1] === '.') {
            spl.splice(i + 1, 1);
            i--;
        }
    }
    return spl;
}

const f4 = spl => {
    while (spl[0] === '.') spl.shift();
    while (spl[spl.length - 1] === '.') spl.pop();
    
    return spl;
}

const f0 = spl => spl.length === 0 ? ['a'] : spl;

const f5 = spl => spl.length > 15 ? spl.slice(0, 15) : spl;

const f5b = spl => {
    if (spl[0] === '.' || spl[spl.length - 1] === '.') return f4(spl);
    else return spl;
}

const fLast = spl => {
    if (spl.length <= 2) {
        while (spl.length <= 2) {
            spl.push(spl[spl.length - 1]);
        }
    }
    return spl;
}

const solution = newId => fLast(f5b(f5(f0(f4(f3(f2(f1(newId.split(''))))))))).join('');


// 2. Normal regexp solution 
// function solution(new_id) {
//     const answer = new_id
//         .toLowerCase() // 1
//         .replace(/[^\w-_.]/g, '') // 2
//         .replace(/\.+/g, '.') // 3
//         .replace(/^\.|\.$/g, '') // 4
//         .replace(/^$/, 'a') // 5
//         .slice(0, 15).replace(/\.$/, ''); // 6
//     const len = answer.length;
//     return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
// }

// console.log(solution('=.='));