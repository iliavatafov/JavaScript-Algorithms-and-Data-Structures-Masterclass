// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent) {
  if (exponent === 0) {
    return 1; // Any number raised to the power of 0 is 1
  } else if (exponent < 0) {
    return 1 / power(base, -exponent); // Handling negative exponents
  } else {
    return base * power(base, exponent - 1); // Recursively compute the power
  }
}

console.log(power(5, 4));
