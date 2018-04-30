var colors = [];
var pickedColor;
var numSquares = 6;

var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setModeButtons();
	setSquares();
	resetButton.addEventListener("click", reset);
	reset();
}

function setModeButtons(){
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setSquares(){
	for(var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function(){
			if(this.style.backgroundColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(pickedColor)
				h1.style.backgroundColor = pickedColor;
				resetButton.textContent = "Play Again";
			} 
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	r = Math.floor(Math.random() * 256);
	g = Math.floor(Math.random() * 256);
	b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function changeColors(color){
	for(var i = 0; i < colors.length; i++) {
				squares[i].style.backgroundColor = color;
			}
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}
