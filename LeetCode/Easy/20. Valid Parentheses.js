//can be found at: https://leetcode.com/problems/valid-parentheses/

function isValid(s) {
  let stack = [],
    len = s.length; 
  
  for(let i = 0; i < len; i++) {
    if(stack.length === 0) stack.push(s[i]);
    else {
      if(stack[stack.length - 1] === '(') {
        if(s[i] === ')') stack.pop();
        else stack.push(s[i]);
      }
      else if(stack[stack.length - 1] === '{') {
        if(s[i] === '}') stack.pop();
        else stack.push(s[i]);
      }
      else if(stack[stack.length - 1] === '[') {
        if(s[i] === ']') stack.pop();
        else stack.push(s[i]);
      }
    }
  }
  if(stack.length > 0) return false; 
  else return true; 
}

// console.log(isValid("()[]{}")); 
// console.log(isValid("([)]")); 
// console.log(isValid("{[]}"));