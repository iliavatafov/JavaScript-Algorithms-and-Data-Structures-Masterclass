function capitalizeFirst(arr) {
  let result = [];

  function helper() {
    if (arr.length === 0) return result;
    const nextElement = arr.splice(0, 1)[0];

    result.push(nextElement.charAt(0).toUpperCase() + nextElement.slice(1));
    helper();
  }

  helper();

  return result;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
