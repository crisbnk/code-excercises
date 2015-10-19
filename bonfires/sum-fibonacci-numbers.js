// SUM ALL ODD FIBONACCI NUMBERS - Bonfire excercise on FreeCodeCamp
// Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.
// The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8,
// and each subsequent number is the sum of the previous two numbers.
// As an example, passing 4 to the function should return 5 because all the odd
// Fibonacci numbers under 4 are 1, 1, and 3.

function sumFibs(num) {
  var temp1 = 1;
  var temp2 = 1;
  var temp3 = 0;
  var res = temp1 + temp2;
  
while(temp1 + temp2 <= num){
  
  temp3 = temp2 + temp1;
  
  if (temp3 % 2 !== 0) {
    res += temp3;
  }
  
  temp1 = temp2;
  temp2 = temp3;
  
  }
  
  return res;
}
