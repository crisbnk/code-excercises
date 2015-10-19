// SPINAL TAP CASE - Bonfire excercise on FreeCodeCamp
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  var res = "",
      re1 = /([a-z])([A-Z])/g,
      re2 = /\W|\_/g;
  
  str = str.replace(re1, '$1 $2');
  
  str = str.toLowerCase();
  
  res = str.replace(re2, "-");
  
  return res;
}
