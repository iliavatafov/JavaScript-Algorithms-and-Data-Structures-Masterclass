// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n) {
  if (n === 1) return 1;
  else if (n === 2) return 1;

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));
