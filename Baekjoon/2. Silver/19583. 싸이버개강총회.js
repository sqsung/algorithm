const [info, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [START, END, LIVE_END] = info.split(' ').map(val =>
  val
    .split(':')
    .map(val => +val)
    .reduce((a, c) => a * 100 + c)
);

const attendance = {};

input.forEach(chat => {
  const [time, nickname] = chat.split(' ');
  const _time = time
    .split(':')
    .map(val => +val)
    .reduce((a, c) => a * 100 + c);

  if (_time <= START) attendance[nickname] = 'Attended';

  if (_time >= END && _time <= LIVE_END && attendance[nickname]) attendance[nickname] = 'Stayed';
});

console.log(Object.values(attendance).filter(res => res === 'Stayed').length);
