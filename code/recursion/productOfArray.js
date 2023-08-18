console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60

function productOfArray(arr) {
  let result = 1;

  function helper() {
    if (arr.length === 0) return;
    if (typeof arr[0] === "number") {
      result *= arr[0];
    }
    arr.splice(0, 1);
    return helper();
  }

  helper();

  return result;
}
