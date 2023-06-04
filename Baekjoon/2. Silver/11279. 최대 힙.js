class MaxHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.heap[parentIndex] >= this.heap[currentIndex]) break;

      [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
      currentIndex = parentIndex;
    }
  }

  getMax() {
    if (this.heap.length == 1) return this.heap.pop();
    if (!this.heap.length) return 0;

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);

    return max;
  }

  sinkDown(index) {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    const length = this.heap.length;
    let largestIndex = index;

    if (leftIndex < length && this.heap[leftIndex] > this.heap[largestIndex]) {
      largestIndex = leftIndex;
    }

    if (rightIndex < length && this.heap[rightIndex] > this.heap[largestIndex]) {
      largestIndex = rightIndex;
    }

    if (largestIndex !== index) {
      [this.heap[index], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[index]][
        (this.heap[index], this.heap[largestIndex])
      ] = [this.heap[largestIndex], this.heap[index]];
      this.sinkDown(largestIndex);
    }
  }
}

const [N, ...input] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const solution = () => {
  const answer = [];
  const maximumHeap = new MaxHeap();

  for (let i = 0; i < +N; i++) {
    +input[i] === 0 ? answer.push(maximumHeap.getMax()) : maximumHeap.insert(+input[i]);
  }

  return answer.join('\n');
};

console.log(solution());
