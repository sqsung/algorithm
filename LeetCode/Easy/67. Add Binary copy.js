function addBinary(a, b) {
  let sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
  return sum.toString(2);
}

/*
BigInt() 
 - 0b : binary (2) 
 - 0o : octa (8)
 - 0x : hexa (16)
 */
