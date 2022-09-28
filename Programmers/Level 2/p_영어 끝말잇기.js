function solution(n, words) {
    let already = []; 
    let person = 1;
    let turn = 1;

    for(let i = 0; i < words.length - 1; i++) {
        let index = i + 1;
        already.push(words[i])
        person++; 
        if (person > n) {
            person = 1;
            turn++;
        }
        if(words[i][words[i].length - 1] !== words[index][0] || already.includes(words[index])) return [person, turn];
    }
    return [0, 0];
}




console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]))
console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]))
console.log(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]))    