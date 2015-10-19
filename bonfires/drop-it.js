// DROP IT - Bonfire excercise on FreeCodeCamp
// Drop the elements of an array (first argument), starting from the front,
// until the predicate (second argument) returns true.

function drop(arr, func) {
  var sol = [];
  var temp = 0;
  
  while(arr.length > 0) {
    temp = arr.shift();
    if(func(temp)){
      sol.push(temp);
    }
  }

  return sol;
}
