// FACTORIALIZE A NUMBER - Bonfire excercise on FreeCodeCamp
// Return the factorial of the provided integer.

function factorialize(num) {
  var i = 1;
  var fact = i;
  while (i <= num) {
    fact *= i;
    i++;
  }
  return fact;
}
