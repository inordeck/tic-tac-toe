/* START GAME */
function startGame() {
	for (var i = 1; i <= 9; i = i + 1) { /* LOOP TO CLEAR CELLS */
		clearCell(i);
	}
	document.turn = "X"; /* SET TURN */
	if (Math.random() < 0.5) { /* USE MATH.RANDOM TO SWITCH START */
		document.turn = "O";
	}
	document.winner = null; /* MAKE SURE NO ONE HAS WON */
	setMessage(document.turn + " starts the game."); /* WHO STARTS GAME */
}

/* SET MESSAGE */
function setMessage(msg) {
	document.getElementById("message").innerText = msg;
}

/* NEXT MOVE */
function nextMove(cell) {
	if (document.winner != null) { /* IF THERE IS A WINNER */
		setMessage(document.winner + " already won."); /* DILPLSY WINNER */
	} else if (cell.innerText == "") { /* IF NO WNNER, START NEXT PLAYER'S TURN */
		cell.innerText = document.turn;
		switchTurn();
	} else { /* IF BOX IS SELECTE, TELL PLAYER TO SELECT ANOTHER BOX */
		setMessage("Select another square.");
	}
}

/* SWITCH TURNS */
function switchTurn() {
	if (checkForWinner(document.turn)) { /* CHECK FOR WINNER */
		setMessage("Conratulations, " + document.turn + " wins!"); /* DISPLAY WINNER IN MESSAGE */
		document.winner = document.turn;
	} else if (document.turn == "X") { /* IF NO WINNER. SWITCH TURNS */
		document.turn = "O";
		setMessage("It's " + document.turn + "'s turn."); /* DISPLAY MESSAGE OF PLAYER'S TURN */
	} else {
		document.turn = "X"; /* SWITCH TO OTHER PLAYER */
		setMessage("It's " + document.turn + "'s turn."); /* DISPLAY MESSAGE OF PLAYER'S TURN */
	}
}

/* CHECK FOR WINNING COMBINATIONS */
function checkForWinner(move) {
	var result = false;
	if (checkRow(1, 2, 3, move) ||
		checkRow(4, 5, 6, move) ||
		checkRow(7, 8, 9, move) ||
		checkRow(1, 4, 7, move) ||
		checkRow(2, 5, 8, move) ||
		checkRow(3, 6, 9, move) ||
		checkRow(1, 5, 9, move) ||
		checkRow(3, 5, 7, move)) {
		result = true;
	}
	return result;
}

/* FUNCTION TO CHECK 3 VALUES AND MOVE TO CHECH FOR WINNER */
function checkRow(a, b, c, move) {
	var result = false;
	if (getCell(a) == move && getCell(b) == move && getCell(c) == move) {
		result = true;
	}
	return result;
}

/* GET CELL NUMBER TO USE IN CHECK ROW */
function getCell(number) {
	return document.getElementById("cell" + number).innerText;
}

/* CLEAR CELLS AFTER GAME IS FINISHE CND HAS BEEN RESET */
function clearCell(number) {
	document.getElementById("cell" + number).innerText = "";
}