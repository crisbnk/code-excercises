// ARGUMENTS OPTIONAL - Bonfire excercise on FreeCodeCamp
// Create a function that sums two arguments together.
// If only one argument is provided, return a function that expects
// one additional argument and will return the sum. For example, add(2, 3) should return 5, and add(2)
// should return a function that is waiting for an argument so that var sum2And = add(2); return sum2And(3); // 5
// If either argument isn't a valid number, return undefined.

function add() {
  var x = arguments[0];
  if(arguments.length === 1) {
    if(typeof(x) === "number"){
      return function(z){
        if(typeof(z) === "number") {
          return x + z;
        } else {
          return undefined;
        }
      };
    } else {
      return undefined;
    }
    
  } else {
    var y = arguments[1];
    if(typeof(x) === "number" && typeof(y) === "number") {
      return x + y;
    } else {
      return undefined;
    }
  }
  
  return false;
}
