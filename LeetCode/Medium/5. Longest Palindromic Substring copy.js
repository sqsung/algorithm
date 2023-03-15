const isPalindrome = (string, i, j) => {
  while (i < j) {
    if (string[i] !== string[j]) return false;

    i++;
    j--;
  }

  return true;
};

const longestPalindrome = string => {
  if (string.length === 1 || string === '') return string;
  else if (string.length === 2 && string[0] !== string[1]) return string[0];
  else if (new Set([...string]).size === string.length) return string[0];

  let longest = '';

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j] && isPalindrome(string, i, j)) {
        let temp = string.substring(i, j + 1);
        longest = temp.length > longest.length ? temp : longest;
        if (temp.length === string.length) return string;
      }
    }
  }

  return longest ? longest : string[0];
};

// Test Cases:
// console.log(longestPalindrome('babad')); // --> 'bab' or 'aba'
// console.log(longestPalindrome('cbbd')); // --> 'bb'
// console.log(longestPalindrome('ac')); // --> 'a'
// console.log(longestPalindrome('abb')); // --> 'bb'
// console.log(longestPalindrome('zxdfwqgs')); // --> 'z'
// console.log(longestPalindrome('bacabab')); // --> 'bacab'
// console.log(longestPalindrome('abcda')); // --> 'a'
// console.log(
//   longestPalindrome(
//     'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'
//   )
// );
