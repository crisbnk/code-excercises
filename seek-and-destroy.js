// SEEK AND DESTROY - Bonfire excercise on FreeCodeCamp
// Remove all values (last argument(s)) from an array (first argument) and return as a new array.
function destroyer(arr,num1,num2) {
  // Remove all the values
  var remove = arr.filter(function(value){
    if(value !== num1 && value !== num2) {
      return true;
    }
  });
  return remove;
}
