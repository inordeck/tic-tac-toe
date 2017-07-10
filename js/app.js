/* CREATE PLAYER */
var playerHeadline = document.getElementByClassName("playerTurn");

var playerOneTurn = function(){
	var playerOne = document.createElement('h3');
	var oneText = document.createTextNode("Player one's turn");
	playerOne.setAttribute('id', "playerOneTurn");
	playerOne.appendChild(oneText);
	playerHeadline.appendChild(playerOne);
	playerOne.style.color = "#f7941d";
};
playerOneTurn();

/* PLAYER 1: X PIECE */
/* (add to function to create X)
	var x = document.createElement('h2');
	var xText = document.createTextNode("X");
	x.setAttribute('id', "x");
	x.appendChild(xText);
	space1.style.backgroundColor = "#f7941d";
	console.log(x);
	space1.appendChild(x);
*/

/* PLAYER 2: O PIECE */
/* (add to function to create O)
	var o = document.createElement('h2');
	var oText = document.createTextNode("O");
	o.setAttribute('id', "o");
	o.appendChild(oText);
	space2.style.backgroundColor = "#12a89d";
	console.log(o);
	space2.appendChild(o);
	space2.removeEventListener('click', space2, false);
	console.log("clicked");
*/


/* ROW 1 */
var space1 = document.getElementById("cell1");
console.log(space1);
space1.addEventListener("click", function() {
	console.log("clicked");
});

var space2 = document.getElementById("cell2");
console.log(space2);
space2.addEventListener("click", function() {
	console.log("clicked");
});

var space3 = document.getElementById("cell3");
console.log(space3);
space3.addEventListener("click", function() {
	console.log("clicked");
});

/* ROW 2 */
var space4 = document.getElementById("cell4");
console.log(space4);
space4.addEventListener("click", function() {
	console.log("clicked");
});

var space5 = document.getElementById("cell5");
console.log(space5);
space5.addEventListener("click", function() {
	console.log("clicked");
});

var space6 = document.getElementById("cell6");
console.log(space6);
space6.addEventListener("click", function() {
	console.log("clicked");
});

/* ROW 3 */
var space7 = document.getElementById("cell7");
console.log(space7);
space7.addEventListener("click", function() {
	console.log("clicked");
});

var space8 = document.getElementById("cell8");
console.log(space8);
space8.addEventListener("click", function() {
	console.log("clicked");
});

var space9 = document.getElementById("cell9");
console.log(space9);
space9.addEventListener("click", function() {
	console.log("clicked");
});
