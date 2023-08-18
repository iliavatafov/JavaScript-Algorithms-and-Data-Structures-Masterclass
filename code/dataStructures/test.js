function merge(arr1, arr2, comperator) {
  const result = [];

  let i = 0;
  let j = 0;

  while (arr1.length > i && arr2.length > j) {
    let isGreater = null;
    if (typeof comperator === "function") {
      if (typeof arr1[i] === "string") {
        isGreater =
          comperator(arr1[i].charCodeAt(0), arr2[j].charCodeAt(0)) > 0;
      } else {
        isGreater = comperator(arr1[i], arr2[j]) > 0;
      }
    } else {
      isGreater = arr1[i] > arr2[j];
    }
    if (isGreater) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }

  while (arr1.length > i) {
    result.push(arr1[i]);
    i++;
  }

  while (arr2.length > j) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr, comperator) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid), comperator);
  let right = mergeSort(arr.slice(mid), comperator);
  return merge(left, right, comperator);
}

var moarKittyData = [
  {
    name: "LilBub",
    age: 7,
  },
  {
    name: "Garfield",
    age: 40,
  },
  {
    name: "Heathcliff",
    age: 45,
  },
  {
    name: "Blue",
    age: 1,
  },
  {
    name: "Grumpy",
    age: 6,
  },
];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

console.table(mergeSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order
