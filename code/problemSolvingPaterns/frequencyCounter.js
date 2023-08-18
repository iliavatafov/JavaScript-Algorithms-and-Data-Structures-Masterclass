function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let charsInStrOne = {};
  let charsInStrTwo = {};

  for (let char of str1) {
    charsInStrOne[char] = charsInStrOne[char] ? ++charsInStrOne[char] : 1;
  }

  for (let char of str2) {
    charsInStrTwo[char] = charsInStrTwo[char] ? ++charsInStrTwo[char] : 1;
  }

  for (let key in charsInStrOne) {
    if (charsInStrOne[key] !== charsInStrTwo[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram("aaz", "zga"));
