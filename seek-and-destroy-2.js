// SEEK AND DESTROY - Bonfire excercise on FreeCodeCamp
// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  var i = 1;
  var res = args[0];
  function cleanArr (arrToClean, value) {
    var out = arrToClean.filter(function(arrElem){
      return arrElem != value;
    });
    return out;
  }
  while (i < args.length) {
    res = cleanArr(res, args[i]);
    i++;
  }
  return res;
}
