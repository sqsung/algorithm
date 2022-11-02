morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}

function solution(letter) {
    let temp = '';
    let arr = [];

    for(let i = 0; i < letter.length; i++) {
        if(letter[i] === ' ') {
            arr.push(temp);
            temp = '';
            continue;
        }
        temp += letter[i];
        if(i === letter.length - 1 && temp.length > 0) arr.push(temp);
    }
    console.log(arr)
    let answer = [];
    for(let i = 0; i < arr.length; i++) {
        answer.push(morse[arr[i]]);
    }

    return answer.join('');
}

console.log(solution(".... . .-.. .-.. ---"))