const fs = require('fs');
let input = fs.readFileSync(0, 'utf-8').toString().trim().split(' ');
let n = parseInt(input[0]);
let k = parseInt(input[1]);

function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.length = 0;
}

function answer(n, k) {
  let result = [];
  let ll = new LinkedList();
  let current, prev;

  for (let i = 1; i < n + 1; i++) {
    current = new Node(i);

    if (i === 1) {
      ll.head = current;
    } else {
      if (i === n) {
        prev.next = current;
        current.next = ll.head;
      } else {
        prev.next = current;
      }
    }
    prev = current;
  }

  current = ll.head;
  let count_A = k;
  while (--count_A) {
    prev = current;
    current = current.next;
  }
  
  let count;
  while (--n) {
    result.push(current.data);
    prev.next = current.next;

    count = k;
    while (count--) {
      prev = current;
      current = current.next;
    }
  }
  result.push(current.data);
  console.log((`<${result.join(', ')}>`));
}

answer(n, k);