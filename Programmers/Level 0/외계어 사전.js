function solution(spell, dic) {
    spell = spell.sort().join("")
    return dic.map(a => a.split("").sort().join('')).find(a => a === spell) === undefined ? 2 : 1;
}


console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]))
console.log(solution(["z", "d", "x"],["def", "dww", "dzx", "loveaw"]))