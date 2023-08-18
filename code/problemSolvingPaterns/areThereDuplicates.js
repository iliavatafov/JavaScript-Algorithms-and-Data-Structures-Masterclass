// function areThereDuplicates(...arr) {
//   let frequencyObject = {};

//   for (let el of arr) {
//     frequencyObject[el] ? frequencyObject[el]++ : (frequencyObject[el] = 1);

//     if (frequencyObject[el] >= 2) return true;
//   }

//   return false;
// }

function areThereDuplicates(...arr) {
  return new Set(arr).size !== arr.length;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
