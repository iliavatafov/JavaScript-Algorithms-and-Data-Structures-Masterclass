function reverse(string) {
  let endIndex = string.length - 1;
  let resultString = "";

  function helper() {
    if (endIndex < 0) return;
    resultString += string[endIndex];
    endIndex--;

    helper();
  }

  helper();

  return resultString;
}

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
