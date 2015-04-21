// WHERE ART THOU - Bonfire excercise on FreeCodeCamp
// Make a function that looks through a list (first argument)
// and returns an array of all objects that have equivalent property values (second argument).
function where(collection, source) {
  var arr = [];
  // What's in a name?
  var key = Object.keys(source);
  for (var i = 0; i < collection.length; i++) {
    var obj = collection[i];
    if(obj.hasOwnProperty(key)) {
      if(obj[key] === source[key]) {
        arr.push(obj);
      }
    }
  }
  return arr;
}
