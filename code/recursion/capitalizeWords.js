function capitalizeWords(array) {
  let result = [];

  function helper() {
    if (array.length === 0) return;
    const element = array.splice(0, 1);
    let string = "";
    for (let char of element) {
      string += char.toUpperCase();
    }
    result.push(string);
    helper();
  }

  helper();

  return result;
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
