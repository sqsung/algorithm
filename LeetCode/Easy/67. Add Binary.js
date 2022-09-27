function addBinary(a, b) {
  let sum = parseInt(a, 2) + parseInt(b, 2);
  return sum.toString(2);
}

console.log(addBinary(1010, 1011));