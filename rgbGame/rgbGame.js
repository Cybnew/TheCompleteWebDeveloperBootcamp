var colors = generateColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var guess = document.getElementById("guess");
var h1 = document.querySelector("h1");
var changeColors = document.querySelector("#changeColors");

changeColors.addEventListener("click", function() {
  colors = generateColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      guess.textContent = "Correct!";
      changeColors.textContent = "YOU WIN!";
      h1.style.backgroundColor = pickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      guess.textContent = "Wrong";
    }
  });
}
var changeColors = color => {
  for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
};

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateColors(num) {
  arr = [];
  for (i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  redValue = Math.floor(Math.random() * 255 + 1);
  blueValue = Math.floor(Math.random() * 255 + 1);
  greenValue = Math.floor(Math.random() * 255 + 1);
  return "rgb(" + redValue + ", " + blueValue + ", " + greenValue + ")";
}
