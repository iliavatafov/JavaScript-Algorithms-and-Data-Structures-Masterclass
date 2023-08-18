function sameFrequency(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();

  if (str1.length !== str2.length) return false;

  const frequencyObject1 = {};
  const frequencyObject2 = {};

  for (let char of str1) {
    frequencyObject1[char]
      ? frequencyObject1[char]++
      : (frequencyObject1[char] = 1);
  }

  for (let char of str2) {
    frequencyObject2[char]
      ? frequencyObject2[char]++
      : (frequencyObject2[char] = 1);
  }

  for (let key in frequencyObject1) {
    if (frequencyObject1[key] !== frequencyObject2[key]) return false;
  }

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
