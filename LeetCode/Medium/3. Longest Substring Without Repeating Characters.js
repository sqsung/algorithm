const removeRepeatedLetters = (loopingArray, letter) => {
  while (loopingArray.includes(letter)) {
    loopingArray.shift();
  }

  return loopingArray;
};

const lengthOfLongestSubstring = string => {
  let looped = [];
  let maxLength = 0;

  [...string].forEach((letter, idx) => {
    if (!looped.includes(letter)) {
      looped.push(letter);
    } else {
      maxLength = looped.length > maxLength ? looped.length : maxLength;
      looped = [...removeRepeatedLetters(looped, letter), string[idx]];
    }
  });

  maxLength = looped.length > maxLength ? looped.length : maxLength;
  return maxLength;
};

// Test Cases:
// console.log(lengthOfLongestSubstring('abcabcbb')); // --> 3
// console.log(lengthOfLongestSubstring('bbbbb')); // --> 1
// console.log(lengthOfLongestSubstring('pwwkew')); // --> 3
// console.log(lengthOfLongestSubstring(' ')); // --> 1
// console.log(lengthOfLongestSubstring('dvdf')); // --> 3
