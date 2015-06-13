// SUM ALL NUMBERS IN A RANGE - Bonfire excercise on FreeCodeCamp
// We'll pass you an array of two numbers.
// Return the sum of those two numbers and all numbers between them.
// The lowest number will not always come first.

function sumAll(arr) {
  function compareNumbers(a, b) {
    return a - b;
  }
  
  arr.sort(compareNumbers);
  
  var i = arr[0] + 1;
  while (i < arr[1]) {
    arr.push(i);
    i++;
  }
  
  var res = arr.reduce(function(a, b) {
    return a + b;
  });
  
  return res;
}
