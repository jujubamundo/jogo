function msg(){
    alert ("Olá Javatpoint");
    }  

    var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message"); 
var header = document.querySelector("header");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

for (var i = 0; i < modeButton.length; i++) {
	modeButton[i].addEventListener("click", function() {
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Fácil" ? numberOfSquares = 3 : numberOfSquares = 6;
		reset();
	});
}

function reset() {
	colors = generateRandomColors(numberOfSquares);
	//Pick a new random color from array
	pickedColor = pickColor();
	//Change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	//Change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		// squares[i].style.background = colors[i];
	}
	header.style.background = "steelblue";
}

colorDisplay.textContent = pickedColor;
		
for(var i = 0; i < squares.length; i++) {
	//Add initial colors to squares
	squares[i].style.background = colors[i];
	
	//Add click listeners to squares
	squares[i].addEventListener("click", function() {
		//Grab the color of clicked square
		var clickedColor = this.style.background;
		//Compare the color of clicked square to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Você acertou :)";
			changeColors(clickedColor);
			header.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Tente novamente!";
		}
	});
}

resetButton.addEventListener("click", function() {
	reset();
	header.style.background = "steelblue";
});

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	//get the red
	var red = Math.floor(Math.random() * 256);
	//get the green
	var green = Math.floor(Math.random() * 256);
	//get the blue
	var blue = Math.floor(Math.random() * 256);
	
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}