var started = false;
var matrix = [];
var usrSign = null;
var computerSign = null;
var hard = false;
var userRound;
var winner = "";
var winnerCells = [];
var counter = 0;
var xDraw = "https://raw.githubusercontent.com/christkv/tic-tac-toe/master/public/img/cross.png";
var oDraw = "https://raw.githubusercontent.com/christkv/tic-tac-toe/master/public/img/circle.png";

// When click start button, call start function
document.getElementById("start").addEventListener("click", startAndStop);

// StartAndStop function check what to do
function startAndStop() {
	if(!started) {
		var icon = "<i class='fa fa-stop fa-2x'></i>";
		started = true;
		document.getElementById("start").innerHTML = icon;
		disableRadioButtons();
		start();
	} else {
		var icon = "<i class='fa fa-play fa-2x'></i>";
		started = false;
		document.getElementById("start").innerHTML = icon;
		disableRadioButtons();
		stop();
	}
}

// Start function check user choices, initialize the matrix and start the game
function start() {
	getUsrChoice();
	matrixInitialize();
	hideChoice();
	roundGame();
}

// Stop function enable radio buttons and clear data
function stop() {
	showChoice();
	disableClick();
	clearAllData();
}

function hideChoice() {
	document.getElementById("aside").classList.add("hidden");
}

function showChoice() {
	document.getElementById("aside").classList.remove("hidden");
}

// Clear data to start again
function clearAllData() {
	matrix = [];
	usrSign = null;
	computerSign = null;
	counter = 0;
	winner = "";
	winnerCells = [];
	document.getElementById("overlay").style.animation = "";
}

// Get user choices: sign, starting turn, difficulty
function getUsrChoice() {
	getSign();
	getWhoStart();
	getDifficulty();
}

// Check the choice of the sign
function getSign() {
	if(document.getElementById("sign0").checked) {
		usrSign = "X";
		computerSign = "O";
	} else {
		usrSign = "O";
		computerSign = "X";
	}
}

// Check who is starting
function getWhoStart() {
	if(document.getElementById("usr").checked) {
		userRound = true;
	} else {
		userRound = false;
	}
}

// Check the game difficulty
function getDifficulty() {
	if(document.getElementById("hard").checked) {
		hard = true;
	} else {
		hard = false;
	}
}

// Disable or enable radio buttons when the game is started or stopped
function disableRadioButtons() {
	var inputs = document.getElementsByTagName("input");
	if(started) {
		for(var i = 0; i < inputs.length; i++) {
			document.getElementById(inputs[i].id).disabled = true;
		}
	} else {
		for(var i = 0; i < inputs.length; i++) {
			document.getElementById(inputs[i].id).disabled = false;
		}
	}
}

// Initialize the matrix and clean all cells
function matrixInitialize() {
	matrix = [[null, null, null], [null, null, null], [null, null, null]];
	cleanMatrix();
	clearCell();
}

// Clean all cells of the matrix
function cleanMatrix() {
	for(var i = 0; i < matrix.length; i++) {
		for(var j = 0; j < matrix[i].length; j++) {
			document.getElementById("cell" + i + j).innerHTML = '';
		}
	}
}

// Make a round
function roundGame() {
	ableDiv(userRound); // If user turn, make cells writable
	if(!userRound){ // If Ai turn, do a move
		aiMove();
	}
}

// Enable or disable the cells
function ableDiv(check){
	if(check) {
		enableClick();
	} else {
		disableClick();
	}
}

// Enable the click on the cells
function enableClick() {
	for(var i = 0; i < matrix.length; i++) {
		for(var j = 0; j < matrix[i].length; j++) {
			if(matrix[i][j] === null) {
				var cell = document.getElementById("cell" + i + j);
				cell.onclick = function() {
					addSign(this.id, usrSign);
				}
			}
		}
	}
}

// Disable the click on the cells
function disableClick() {
	for(var i = 0; i < matrix.length; i++) {
		for(var j = 0; j < matrix[i].length; j++) {
			var cell = document.getElementById("cell" + i + j);
			cell.onclick = false;
		}
	}
}

// Move on AI turn
function aiMove() {
	if(!hard) {
		randomMove();
	} else {
		makeBestMove();
	}
}

// Random move during Ai turn
function randomMove() {
	var i;
	var j;

	do {
		i = Math.floor(Math.random() * 3);
		j = Math.floor(Math.random() * 3);
	}
	while(matrix[i][j] !== null);

	var idCell = ("cell".concat(i)).concat(j);
	addSign(idCell, computerSign);
}

// Best move during Ai turn
function makeBestMove() {
	var i;
	var j;
	var arrBestMoveWin = bestMove(computerSign);
	var arrBestMoveBlock = bestMove(usrSign);
	var arrAi = [];

	if(document.getElementById("usr").checked) {
		arrAi = computerSecond();
	} else {
		arrAi = computerFirst();
	}

	if(arrBestMoveWin.length > 0) {
		i = arrBestMoveWin[0];
		j = arrBestMoveWin[1];
	} else if(arrBestMoveBlock.length > 0) {
		i = arrBestMoveBlock[0];
		j = arrBestMoveBlock[1];
	} else if(arrAi.length > 0) {
		i = arrAi[0];
		j = arrAi[1];
	} else {
		do {
			i = Math.floor(Math.random() * 3);
			j = Math.floor(Math.random() * 3);
		}
		while(matrix[i][j] !== null);
	}

	var idCell = ("cell".concat(i)).concat(j);
	addSign(idCell, computerSign);
}

// Change player each turn
function playerChange(){
	if(userRound){
		userRound = false;
	} else if(!userRound) {
		userRound = true;
	}
}

// Add the sign to a selected cell
function addSign(id, sign) {
	var row = id.substr(4, 1);
	var column = id.substr(5);
	counter++;
	matrix[row][column] = sign;

	if(sign === "X") {
		document.getElementById(id).style.background = "url(" + xDraw + ") no-repeat center center";
	} else {
		document.getElementById(id).style.background = "url(" + oDraw + ") no-repeat center center";
	}

	var statusGame = checkStatusGame(matrix); // Check if game is finished
	if(statusGame){
		changeClassToWinner(winnerCells);
		winnerMessage();
		startAgain();
	} else {
		playerChange();
		roundGame();
	}
}

function changeClassToWinner(arrOfCellName) {
	for(var i = 0; i < arrOfCellName.length; i++) {
		document.getElementById(arrOfCellName[i]).classList.add("winner");
	}
	setTimeout(function() {
		for(var i = 0; i < arrOfCellName.length; i++) {
			document.getElementById(arrOfCellName[i]).classList.remove("winner");
		}
	}, 2000);
}

function winnerMessage() {
	if(winner === usrSign) {
		document.getElementById("overlay-span").innerHTML = "YOU WIN!";
	} else if(winner === computerSign) {
		document.getElementById("overlay-span").innerHTML = "YOU LOSE!";
	} else {
		document.getElementById("overlay-span").innerHTML = "DRAW!";
	}
	document.getElementById("overlay").style.animation = "fadeIn 2s";
}

// Check if the game is finished
function checkStatusGame(matrix){
	var stopGame = false;
	stopGame = checkWinner(matrix); // Check if someone made a tris

	if(!stopGame){
		stopGame = checkFinishGame(matrix); // Check if there are empty cells
	}
	return stopGame;
}

// Check if there is a tris
function checkWinner(matrix) {
	var resRow = checkRow(matrix);
	var resCol = checkColumn(matrix);
	var resDiag = checkDiagonal(matrix);
	if(resRow || resCol || resDiag) {
		if(userRound) {
			winner = usrSign;
		} else {
			winner = computerSign;
		}
		return true;
	}
	return false;
}

// Check if there is an horizontal tris
function checkRow(matrix) {
	var result = false;
	for(var i = 0; i < matrix.length; i++) {
		if(matrix[i][0] === matrix[i][1] && matrix[i][1] === matrix[i][2] && matrix[i][0] !== null) {
			result = true;
			winnerCells.push("cell" + i + "0", "cell" + i + "1", "cell" + i + "2");
		}
	}
	return result;
}

// Check if there is a vertical tris
function checkColumn(matrix) {
	var result = false;
	for(var j = 0; j < matrix.length; j++) {
		if(matrix[0][j] === matrix[1][j] && matrix[1][j] === matrix[2][j] && matrix[0][j] !== null) {
			result = true;
			winnerCells.push("cell0" + j, "cell1" + j, "cell2" + j);
		}
	}
	return result;
}

// Check if there is a diagonal tris
function checkDiagonal(matrix) {
	var result = false;
	if(matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2] && matrix[0][0] !== null) {
		result = true;
		winnerCells.push("cell00", "cell11", "cell22");
	} else if(matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0] && matrix[0][2] !== null) {
		result = true;
		winnerCells.push("cell02", "cell11", "cell20");
	}
	return result;
}

// Check if there are empty cells
function checkFinishGame(matrix) {
	var result = true;
	for(var i = 0; i < matrix.length; i++){
		for(var j = 0; j < matrix[i].length; j++){
			if(matrix[i][j] === null){
				result = false;
				break;
			}
		}
	}
	if(result) {
		startAgain();
	}
	return result;
}

// When there is a winner or a draw, start the game again after delay
function startAgain() {
	setTimeout(function() {
		clearAllData();
		clearCell();
		start();
	}, 2000);
}

// Clear all the signs inside the cells
function clearCell() {
	for(var i = 0; i < matrix.length; i++) {
		for(var j = 0; j < matrix[i].length; j++) {
			document.getElementById("cell" + i + j).style.background = "none";
		}
	}
}

// AI always win or draw
function bestMove(sign) {
	var doubleRow = checkDoubleSignRow(sign);
	var doubleCol = checkDoubleSignCol(sign);
	var doubleDiag = checkDoubleSignDiag(sign);
	if(doubleRow.length > 0) {
		return doubleRow;
	} else if(doubleCol.length > 0) {
		return doubleCol;
	} else if(doubleDiag.length > 0) {
		return doubleDiag;
	} else {
		return doubleRow;
	}
}

// Move AI do if it starts
function computerFirst() {
	var signPosition = [];
	if(counter === 0) {
		signPosition = [0, 0];
	} else if(counter === 2) {
		if(matrix[1][1] === usrSign) {
			signPosition = [2, 2];
		} else if(matrix[1][0] === usrSign || matrix[1][2] === usrSign || matrix[2][1] === usrSign) {
			signPosition = [0, 2];
		} else if(matrix[0][1] === usrSign) {
			signPosition = [2, 0];
		} else if(matrix[0][2] === usrSign || matrix[2][0] === usrSign) {
			signPosition = [2, 2];
		} else if(matrix[2][2] === usrSign) {
			signPosition = [0, 2];
		}
	} else if(counter === 4) {
		if(matrix[0][2] === computerSign && matrix[2][2] === usrSign) {
			signPosition = [2, 0];
		} else {
			signPosition = [1, 1];
		}
	}
	return signPosition;
}

// Move AI do if it not starts
function computerSecond() {
	var signPosition = [];
	if(counter === 1) {
		if(matrix[1][1] === null) {
			signPosition = [1, 1];
		} else {
			signPosition = [0, 0];
		}
	} else if(counter === 3) {
		if(matrix[0][0] === computerSign && matrix[1][1] === usrSign && matrix[2][2] === usrSign) { // Diag computerSign in 0,0
			signPosition = [0, 2];
		} else if(matrix[0][0] === usrSign && matrix[1][1] === computerSign && matrix[2][2] === usrSign) { // Diag computerSign center
			signPosition = [0, 1];
		} else if(matrix[0][2] === usrSign && matrix[1][1] === computerSign && matrix[2][0] === usrSign) { // Diag computerSign center
			signPosition = [0, 1];
		} else if(matrix[1][0] === usrSign && matrix[1][1] === computerSign && matrix[1][2] === usrSign) { // Horizontal
			signPosition = [0, 0];
		} else if(matrix[0][1] === usrSign && matrix[1][1] === computerSign && matrix[2][1] === usrSign) { // Vertical
			signPosition = [0, 0];
		} else if(matrix[0][1] === usrSign && matrix[1][1] === computerSign && matrix[1][0] === usrSign) { // All lateral
			signPosition = [0, 2];
		} else if(matrix[2][1] === usrSign && matrix[1][1] === computerSign && matrix[1][0] === usrSign) { // All lateral
			signPosition = [0, 0];
		} else if(matrix[2][1] === usrSign && matrix[1][1] === computerSign && matrix[1][2] === usrSign) { // All lateral
			signPosition = [0, 2];
		} else if(matrix[1][2] === usrSign && matrix[1][1] === computerSign && matrix[0][1] === usrSign) { // All lateral
			signPosition = [0, 0];
		} else if(matrix[2][1] === usrSign && matrix[1][1] === computerSign && matrix[0][0] === usrSign) { // Mixed
			signPosition = [1, 2];
		} else if(matrix[1][2] === usrSign && matrix[1][1] === computerSign && matrix[0][0] === usrSign) { // Mixed
			signPosition = [2, 1];
		} else if(matrix[0][2] === usrSign && matrix[1][1] === computerSign && matrix[2][1] === usrSign) { // Mixed
			signPosition = [1, 0];
		} else if(matrix[0][2] === usrSign && matrix[1][1] === computerSign && matrix[1][0] === usrSign) { // Mixed
			signPosition = [2, 1];
		} else if(matrix[2][0] === usrSign && matrix[1][1] === computerSign && matrix[0][1] === usrSign) { // Mixed
			signPosition = [1, 2];
		} else if(matrix[2][0] === usrSign && matrix[1][1] === computerSign && matrix[1][2] === usrSign) { // Mixed
			signPosition = [0, 1];
		} else if(matrix[2][2] === usrSign && matrix[1][1] === computerSign && matrix[0][1] === usrSign) { // Mixed
			signPosition = [1, 0];
		} else if(matrix[2][2] === usrSign && matrix[1][1] === computerSign && matrix[1][0] === usrSign) { // Mixed
			signPosition = [0, 1];
		}
	}
	return signPosition;
}

// Cell to take on rows to win or block a tris
function checkDoubleSignRow(sign) {
	var signPosition = [];
	for(var i = 0; i < matrix.length; i++) {
		if(matrix[i][0] === null && matrix[i][1] === sign && matrix[i][2] === sign) {
			signPosition[0] = i;
			signPosition[1] = 0;
			return signPosition;
		} else if(matrix[i][0] === sign && matrix[i][1] === sign && matrix[i][2] === null) {
			signPosition[0] = i;
			signPosition[1] = 2;
			return signPosition;
		} else if(matrix[i][0] === sign && matrix[i][1] === null && matrix[i][2] === sign) {
			signPosition[0] = i;
			signPosition[1] = 1;
			return signPosition;
		}
	}
	return signPosition;
}

// Cell to take on columns to win or block a tris
function checkDoubleSignCol(sign) {
	var signPosition = [];
	for(var i = 0; i < matrix.length; i++) {
		if(matrix[0][i] === null && matrix[1][i] === sign && matrix[2][i] === sign) {
			signPosition[0] = 0;
			signPosition[1] = i;
			return signPosition;
		} else if(matrix[0][i] === sign && matrix[1][i] === sign && matrix[2][i] === null) {
			signPosition[0] = 2;
			signPosition[1] = i;
			return signPosition;
		} else if(matrix[0][i] === sign && matrix[1][i] === null && matrix[2][i] === sign) {
			signPosition[0] = 1;
			signPosition[1] = i;
			return signPosition;
		}
	}
	return signPosition;
}

// Cell to take on diagonals to win or block a tris
function checkDoubleSignDiag(sign) {
	var signPosition = [];
	if(matrix[0][0] === null && matrix[1][1] === sign && matrix[2][2] === sign) {
		signPosition[0] = 0;
		signPosition[1] = 0;
		return signPosition;
	} else if(matrix[0][0] === sign && matrix[1][1] === sign && matrix[2][2] === null) {
		signPosition[0] = 2;
		signPosition[1] = 2;
		return signPosition;
	} else if(matrix[0][0] === sign && matrix[1][1] === null && matrix[2][2] === sign) {
		signPosition[0] = 1;
		signPosition[1] = 1;
		return signPosition;
	} else if(matrix[2][0] === null && matrix[1][1] === sign && matrix[0][2] === sign) {
		signPosition[0] = 2;
		signPosition[1] = 0;
		return signPosition;
	} else if(matrix[2][0] === sign && matrix[1][1] === sign && matrix[0][2] === null) {
		signPosition[0] = 0;
		signPosition[1] = 2;
		return signPosition;
	} else if(matrix[2][0] === sign && matrix[1][1] === null && matrix[0][2] === sign) {
		signPosition[0] = 1;
		signPosition[1] = 1;
		return signPosition;
	}
	return signPosition;
}
