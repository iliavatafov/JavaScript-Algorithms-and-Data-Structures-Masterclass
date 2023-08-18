function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// function merge(arr1, arr2) {
//   const resultArray = [];
//   let i = 0;
//   let j = 0;

//   while (arr1.length - 1 >= i && arr2.length - 1 >= j) {
//     if (arr1[i] <= arr2[j]) {
//       resultArray.push(arr1[i]);
//       i++;
//     } else if (arr1[i] > arr2[j]) {
//       resultArray.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i <= arr1.length - 1) {
//     resultArray.push(arr1[i]);
//     i++;
//   }

//   while (j <= arr2.length - 1) {
//     resultArray.push(arr2[j]);
//     j++;
//   }

//   return resultArray;
// }

console.log(
  merge(
    [1, 10, 50, 100, 100, 2000, 5000],
    [2, 14, 99, 100, 100, 600, 800, 9000, 100000, 5555555555]
  )
);
