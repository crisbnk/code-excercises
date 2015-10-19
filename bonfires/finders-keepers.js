// FINDERS KEEPERS - Bonfire excercise on FreeCodeCamp
// Create a function that looks through an array (first argument) and returns
// the first element in the array that passes a truth test (second argument).

function find(arr, func) {
  var num = 0;
  
  var test = arr.filter(func);
  num = test[0];
  
  return num;
}
