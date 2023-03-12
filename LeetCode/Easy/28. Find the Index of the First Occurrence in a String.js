const strStr = (haystack, needle) => {
  const firstLetter = needle[0];
  const needleLength = needle.length;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] !== firstLetter) continue;

    if ([...haystack].splice(i, needleLength).join('') === needle) return i;
  }

  return -1;
};

// Test Cases:
console.log(strStr('sadbutsad', 'sad'));
console.log(strStr('leetcode', 'leeto'));
console.log(strStr('hello', 'll'));
console.log(strStr('mississippi', 'issip'));
