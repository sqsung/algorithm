const strStr = (haystack, needle) => {
  const firstLetter = needle[0];
  const needleLength = needle.length;
  let _haystack = [...haystack];

  for (let i = 0; i < _haystack.length; i++) {
    if (_haystack[i] !== firstLetter) continue;

    if (_haystack.splice(i, needleLength).join('') === needle) return i;
    _haystack = [...haystack];
  }

  return -1;
};

// Test Cases:
// console.log(strStr('sadbutsad', 'sad'));
// console.log(strStr('leetcode', 'leeto'));
// console.log(strStr('hello', 'll'));
// console.log(strStr('mississippi', 'issip'));
