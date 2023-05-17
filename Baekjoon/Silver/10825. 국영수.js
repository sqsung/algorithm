const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, ...classroom] = inputs;

class Student {
  constructor(name, kor, eng, math) {
    this.name = name;
    this.kor = kor;
    this.eng = eng;
    this.math = math;
  }
}

let students = classroom.map((people) => {
  const arr = people.split(' ');
  return new Student(arr[0], +arr[1], +arr[2], +arr[3]);
});

students.sort((a, b) => {
  if (a.kor !== b.kor) return b.kor - a.kor;
  if (a.eng !== b.eng) return a.eng - b.eng;
  if (a.math !== b.math) return b.math - a.math;
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});

let answer = '';

for (let i = 0; i < students.length; i++) {
  answer += students[i].name + '\n';
}

console.log(answer);