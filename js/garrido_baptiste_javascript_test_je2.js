const checkFormat = (array) => {
  // Check if the array and has exactly 9 elements
  if (Array.isArray(array) && array.length === 9) {
    const arrayUnique = [];
    for (let index = 0; index < array.length; index++) {
      const position = array[index];
      // Check if the position is a number from 1 to 9
      if (isNaN(position) || position < 1 || position > 9) {
        return false;
      }
      // Check if the number is unique
      if (arrayUnique.includes(position.toString())) {
        return false;
      }

      // add to the array of unique
      arrayUnique.push(position.toString());
    }
    return true;
  } else {
    return false;
  }
};

// console.log(checkFormat([1, 2, 3, 4, 5, 6, 7, 8, 9])); // true (all numbers)
// console.log(checkFormat([1, 2, 3, 4, 5, 6, 7, 8, "a"])); // flase : not a number
// console.log(checkFormat([1, 2, 3, 4, 5, 6, 8, 8, 9])); // false : not unique (8)
// console.log(checkFormat([1, 2, 3, 4, 5, 6, 7, 8])); // false : not exactly 9 position
// console.log(checkFormat([0, 2, 3, 4, 5, 6, 7, 8, 9])); // false : not between 1 and 9
// console.log(checkFormat([1, 2, 3, 4, 5, 6, 7, 8, 10])); // false : not between 1 and 9
