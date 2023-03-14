const reverseLltoArray = linkedList => {
  const conversed = [];

  if (linkedList.next !== null) conversed.push(...reverseLltoArray(linkedList.next));
  conversed.push(linkedList.val);

  return conversed;
};

const addTwoNumbers = (l1, l2) => {
  const firstNum = BigInt(reverseLltoArray(l1).join(''));
  const secondNum = BigInt(reverseLltoArray(l2).join(''));

  let sumLinkedList = null;

  [...(firstNum + secondNum + '')].forEach(num => {
    sumLinkedList = { val: num, next: sumLinkedList };
  });

  return sumLinkedList;
};
