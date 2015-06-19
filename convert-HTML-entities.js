// CONVERT HTML ENTITIES - Bonfire excercise on FreeCodeCamp
// Convert the characters "&", "<", ">", '"', and "'", in a string to their corresponding HTML entities.

function convert(str) {
  var regEx = [/(\&)/g, /(\<)/g, /(\>)/g, /(\")/g],
      sol = ["&amp;", "&lt;", "&gt;", "&quot;"],
      i = 0;
  
  while (i < regEx.length) {
    str = str.replace(regEx[i], sol[i]);
    i++;
  }
  
  return str;
}
