const solution = sides => sides.sort((a, b) => a - b)[0] + sides.sort((a, b) => a - b)[1] > sides.sort((a, b) => a - b)[2] ? 1 : 2;
