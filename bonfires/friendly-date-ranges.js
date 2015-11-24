// FRIENDLY DATE RANGES - Bonfire excercise on FreeCodeCamp
// Implement a way of converting two dates into a more friendly date range that could be presented to a user.
// It must not show any redundant information in the date range.
// For example, if the year and month are the same then only the day range should be displayed.
// Secondly, if the starting year is the current year, and the ending year can be inferred by the reader,
// the year should be omitted.
// Input date is formatted as YYYY-MM-DD

function friendly(str) {
  var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var res = [];
  var diffYear = 0;
  var diffMonth = 0;
  var diffDay = 0;
  var output = [];
  var from = "";
  var to = "";
  
  for(var i = 0; i < str.length; i++) {
    var temp = str[i].split("-");
    res.push(temp);
  }
  
  diffYear = res[1][0] - res[0][0];
  diffMonth = res[1][1] - res[0][1];
  diffDay = res[1][2] - res[0][2];
  
  if(diffYear === 0 && diffMonth === 0 && diffDay === 0) {
    from = month[Number.parseInt(res[0][1]) - 1] + " " + sayTheDay(Number.parseInt(res[0][2])) + ", " + res[0][0];
    output = [from];
  } else if(diffYear === 0 && diffMonth === 0) {
    from = month[Number.parseInt(res[0][1]) - 1] + " " + sayTheDay(Number.parseInt(res[0][2]));
    to = sayTheDay(Number.parseInt(res[1][2]));
    output = [from, to];
  } else if(diffYear === 1 && diffMonth < 0 || diffYear === 0) {
    from = month[Number.parseInt(res[0][1]) - 1] + " " + sayTheDay(Number.parseInt(res[0][2]));
    to = month[Number.parseInt(res[1][1]) - 1] + " " + sayTheDay(Number.parseInt(res[1][2]));
    output = [from, to];
  } else if(diffYear > 1 || diffYear === 1 && diffMonth === 0 && diffDay < 0) {
    from = month[Number.parseInt(res[0][1]) - 1] + " " + sayTheDay(Number.parseInt(res[0][2])) + ", " + res[0][0];
    to = month[Number.parseInt(res[1][1]) - 1] + " " + sayTheDay(Number.parseInt(res[1][2])) + ", " + res[1][0];
    output = [from, to]; 
  }
  
  return output;
}

function sayTheDay(number) {
  switch (number) {
    case 1:
      return "1st";
    case 2:
      return "2nd";
    case 3:
      return "3rd";
    default:
      return number + "th";
  }
}

friendly(["2022-09-05", "2023-09-04"]);
