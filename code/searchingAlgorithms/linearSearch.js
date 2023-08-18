// function linearSearch(arr, value) {
//   let index = null;
//   arr.forEach((el, i) => {
//     if (el === value) index = i;
//   });

//   return index || index === 0 ? index : -1;
// }

function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

const array = ["abba", "habba", "liiis", "mat"];

console.log(linearSearch(array, "aa"));
