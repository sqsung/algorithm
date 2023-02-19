const solution = (s, skip, index) => {
  let answer = "";

  const skipRegex = new RegExp(`[^${skip}]`, "g");
  const alpabet = "abcdefghijklmnopqrstuvwxyz".match(skipRegex);

  for (const letter of s) {
    const idx = alpabet.indexOf(letter) + index;
    answer += alpabet[idx % alpabet.length];
  }

  return answer;
};
