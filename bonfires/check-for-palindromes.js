// CHECK FOR PALINDROMES - Bonfire excercise on FreeCodeCamp
// Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
  var re = /[\W]/g;
  var check = str.replace(re, "").toLowerCase();
  var rev = check.split("").reverse().join("");
  if (check === rev) {
    return true;  
  } else {
    return false;
  }
}
