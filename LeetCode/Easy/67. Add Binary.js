function addBinary(a, b) {
  let sum = BigInt(`0b${a}`) + parseInt(`0b${b}`);
  return sum.toString(2);
}

console.log(addBinary(1010, 1011));