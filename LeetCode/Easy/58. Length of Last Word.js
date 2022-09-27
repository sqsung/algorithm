let input = "   fly  me  to the    moon   ";

var lengthOfLastWord = function(s) {
  let wordArr = s.split(' ');
  for(let i = 0; i < wordArr.length; i++) {
      if (wordArr[i] === '') {
          wordArr.splice(i, 1);
          i--;
      }
  } 
 
  let index = wordArr.length - 1;
  return wordArr[index].length;
}


console.log(lengthOfLastWord(input));