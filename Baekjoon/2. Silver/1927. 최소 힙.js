class MinimumHeap {
  constructor() {
    this.heap = [-Infinity];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(position) {
    let tmp = this.heap[position];

    while (tmp < this.heap[parseInt(position / 2)]) {
      this.heap[position] = this.heap[parseInt(position / 2)];
      position = parseInt(position / 2);
    }

    this.heap[position] = tmp;
  }

  get() {
    if (this.heap.length === 2) return this.heap.pop();

    let getResult = this.heap[1];
    this.heap[1] = this.heap.pop();
    this.bubbleDown(1, this.heap.length - 1);
    return getResult;
  }

  bubbleDown(position, len) {
    let tmp = this.heap[position],
      child;

    while (position <= parseInt(len / 2)) {
      child = position * 2;

      if (child < len && this.heap[child] > this.heap[child + 1]) child += 1;
      if (tmp <= this.heap[child]) break;

      this.heap[position] = this.heap[child];
      position = child;
    }

    this.heap[position] = tmp;
  }

  size() {
    return this.heap.length - 1;
  }

  front() {
    return this.heap[1];
  }
}

const [, ...input] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const getMinimums = () => {
  const nums = input.map(val => +val);

  const minHeap = new MinimumHeap();
  let answer = '';

  nums.forEach(num => {
    if (num === 0) {
      if (!minHeap.size()) {
        answer += '0' + '\n';
      } else {
        answer += `${minHeap.front()}\n`;
        minHeap.get();
      }
    } else {
      minHeap.insert(num);
    }
  });

  return answer.trim();
};

console.log(getMinimums());
