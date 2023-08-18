// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(number) {
  if (number === 0) return number;

  return number + recursiveRange(number - 1);
}

console.log(recursiveRange(6));
console.log(recursiveRange(10));
