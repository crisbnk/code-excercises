// SUM ALL PRIMES - Bonfire excercise on FreeCodeCamp
// Sum all the prime numbers up to and including the provided number.
// A prime number is defined as having only two divisors, 1 and itself.
// For example, 2 is a prime number because it's only divisible by 1 and 2.
// 1 isn't a prime number, because it's only divisible by itself.
// The provided number may not be a prime.

function sumPrimes(num) {
  
  var res = [];
  
  for(var i = 2; i <= num; i++){
    if(isPrime(i))
      res.push(i);
  }
  
  return processResult(res);
}


function isPrime(x){
  var i = 2;
  
  while(i <= x) {
    if(x === i) {
      return true;
    } else if (x % i === 0) {
      return false;
    }
    i++;
  }
}

function processResult(arr){
  var result = 0;
  
  for(var i = 0; i < arr.length ; i++) {
    result += arr[i];
  }
  
  return result;
}
