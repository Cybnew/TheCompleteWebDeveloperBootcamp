var stars = prompt("How many stars per row would you like?");
var rows = prompt("How many rows would you like?");

function printRows(a, b) {
  var star = "";
  for (i = 0; i < a; i++) {
    star += "*";
  }
  for (i = 0; i < b; i++) {
    console.log(star);
  }
  console.log("this program printed " + rows * stars + " stars!");
}

printRows(stars, rows);
