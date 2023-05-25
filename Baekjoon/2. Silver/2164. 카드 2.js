const N = 6;

/**
 * @LinkedList에 넣어줄 Node
 * 이번 문제에서는 각 카드가 Node로 저장된다
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

/**
 * 각 카드 정보를 저장해둘 LinkedList
 * 이번 문제는 그냥 @Array 메서드를 사용해 풀면 시간 초과 뜬다
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  /**
   * @Array push처럼 LinkedList 끝에 새로운 값 추가
   * 인수로 전달받는 값을 기준으로 새로운 Node를 생성해서 LinkedList에 넣어준다
   */
  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this._size++;

    return newNode;
  }

  /**
   * @Array shift처럼 가장 앞에 위치한 값을 제거함
   */
  shift() {
    this.head = this.head.next;
    this.head.prev = null;
    this._size--;
  }

  /**
   * @getHead -> 현재 LinkedList의 제일 앞에 있는 값 반환
   * @size -> 현재 LinkedList의 길이 반환
   */
  getHead() {
    return this.head.value;
  }

  size() {
    return this._size;
  }
}

const ll = new LinkedList();

for (let i = 1; i <= N; i++) {
  ll.push(i);
}

while (ll.size() > 1) {
  ll.shift();
  ll.push(ll.getHead());
  ll.shift();
}

console.log(ll.getHead());
