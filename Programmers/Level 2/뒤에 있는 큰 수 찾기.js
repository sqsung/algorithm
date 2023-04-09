const solution = numbers => {
  let answer = Array.from({ length: numbers.length }).fill(-1);
  let stack = [];

  numbers.forEach((num, idx) => {
    while (stack && numbers[stack.at(-1)] < num) {
      answer[stack.pop()] = num;
    }

    stack.push(idx);
  });

  return answer;
};
