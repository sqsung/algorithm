const input = ['11', '1 4', '3 5', '0 6', '5 7', '3 8', '5 9', '6 10', '8 11', '8 12', '2 13', '12 14'];

// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const N = +input.shift();
const meetingTimes = input.map(time => time.split(' ').map(val => +val));

const getMaxMeetings = (N, meetings) => {
  let answer = 1;

  meetings.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  let finishTime = meetings[0][1];

  for (let i = 1; i < N; i++) {
    if (finishTime > meetings[i][0]) continue;

    finishTime = meetings[i][1];
    answer += 1;
  }

  return answer;
};

console.log(getMaxMeetings(N, meetingTimes));
