// PIG LATIN - Bonfire excercise on FreeCodeCamp
// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word,
// moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.

function translate(str) {
  var re = /[aeiou]/g,
      first = "";
      res = "";
      i = 0;
  
  do {
    first = str.substr(0, i+1);
    i++;
  } while (first.search(re) == -1);
  
  if (i === 1) {
    res = str + "way";
  } else {
    res = str.substr(i - 1, str.length) + str.substr(0, i - 1) + "ay";
  }
  
 return res;
}
