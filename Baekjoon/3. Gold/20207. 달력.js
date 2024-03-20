/**
 * Test Case 1
 * const N = "7";
 * const input = ["2 4", "4 5", "5 6", "5 7", "7 9", "11 12", "12 12"]; // answer: 28
 *
 * Test Case 2
 *
 * const N = "5";
 * const input = ["1 9", "8 9", "4 6", "3 4", "2 5"]; // answer: 36
 */
const [, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const schedules = {};

input.forEach(days => {
  const [start, end] = days.split(" ");

  for (let day = +start; day <= +end; day += 1) {
    if (schedules[day]) schedules[day] += 1;
    else schedules[day] = 1;
  }
});

let max = 0;
let previous = Number.MIN_SAFE_INTEGER;
let consecutive = 0;
const answers = [];

Object.keys(schedules).forEach((day, index) => {
  if (index !== 0 && previous + 1 < +day) {
    answers.push(max * consecutive);
    previous = Number.MIN_SAFE_INTEGER;
    consecutive = 0;
    max = 0;
  }

  if (previous === Number.MIN_SAFE_INTEGER || previous + 1 === +day) {
    previous = +day;
    consecutive += 1;
    if (schedules[day] > max) max = schedules[day];
  }
});

answers.push(max * consecutive);
console.log(answers.reduce((a, c) => a + c));
