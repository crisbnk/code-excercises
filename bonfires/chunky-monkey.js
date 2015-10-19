// CHUNKY MONKEY - Bonfire excercise on FreeCodeCamp
// Write a function that splits an array (first argument) into groups the length of size (second argument)
// and returns them as a multidimensional array.

function chunk(arr, size) {
  var res = [];
  while (arr.length > 0) {
    var newArr = [];
    newArr = arr.splice(0, size);
    res.push(newArr);
  }
  return res;
}
