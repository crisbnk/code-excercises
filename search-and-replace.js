// SEARCH AND REPLACE - Bonfire excercise on FreeCodeCamp
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence the perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// NOTE: Preserve the case of the original word when you are replacing it.
// For example if you mean to replace the word 'Book' with the word 'dog', it should be replaced as 'Dog'

function replace(str, before, after) {
  var initBefore = before.charAt(0);
  var initAfter = after.charAt(0);
  var re = /(?:^|\s)([^\s])/g;
  
  if (initBefore == initBefore.toUpperCase()) {
    after = after.replace(re, initAfter.toUpperCase());
  } else if (initBefore == initBefore.toLowerCase()) {
    after = after.replace(re, initAfter.toLowerCase());
  }
  
  var res = str.replace(before, after);
 
  return res;
}
