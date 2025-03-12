class MinScovilleHeap {
  constructor(scoville) {
    this.heap = [];
    scoville.forEach(value => this.insert(value));
  }

  getParentNodeIndex(node) {
    return Math.floor((node - 1) / 2);
  }

  getRightNodeIndex(node) {
    return node * 2 + 2;
  }

  getLeftNodeIndex(node) {
    return node * 2 + 1;
  }

  extractMinimum() {
    if (this.heap.length === 0) {
      return -1;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const min = this.heap[0];

    this.heap[0] = this.heap.pop();
    this.down();

    return min;
  }

  insert(value) {
    this.heap.push(value);
    this.up();
  }

  swap(node1, node2) {
    [this.heap[node1], this.heap[node2]] = [this.heap[node2], this.heap[node1]];
  }

  up() {
    let index = this.heap.length - 1;

    while (index) {
      const parentIndex = this.getParentNodeIndex(index);
      const parent = this.heap[parentIndex];
      const child = this.heap[index];

      if (child >= parent) {
        break;
      }

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  down() {
    let index = 0;

    while (this.getLeftNodeIndex(index) < this.heap.length) {
      // Left
      const leftNodeIndex = this.getLeftNodeIndex(index);
      const leftNode = this.heap[leftNodeIndex];
      // Right
      const rightNodeIndex = this.getRightNodeIndex(index);
      const rightNode = this.heap[rightNodeIndex];

      let smallerChildIndex = leftNodeIndex;

      if (rightNodeIndex < this.heap.length && rightNode < leftNode) {
        smallerChildIndex = rightNodeIndex;
      }

      if (this.heap[index] <= this.heap[smallerChildIndex]) {
        break;
      }

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
}

const solution = (scoville, K) => {
  let mixCount = 0;

  const heap = new MinScovilleHeap(scoville);

  while (heap.heap.length > 1) {
    if (heap.heap[0] >= K) {
      return mixCount;
    }

    const min1 = heap.extractMinimum();
    const min2 = heap.extractMinimum();

    const mixed = min1 + min2 * 2;
    heap.insert(mixed);
    mixCount += 1;
  }

  return heap.heap[0] >= K ? mixCount : -1;
};
