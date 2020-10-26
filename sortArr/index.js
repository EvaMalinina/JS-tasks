// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
//
// Zero isn't an odd number and you don't need to move it.
// If you have an empty array, you need to return it.
//
// Example
// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
  let sortedArr = [];
  if (array.length === 0)
    return sortedArr;
  else
    sortedArr = array
      .filter(el => el % 2)
      .sort((a, b) => a - b);
    return array.map(el => el % 2 ? sortedArr.shift() : el);
}

console.log(sortArray([5, 3, 2, 8, 15, 4, 13]))
