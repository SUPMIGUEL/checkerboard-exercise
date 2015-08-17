


var div = document.getElementsByTagName("div");
var cssR = "padding-bottom: 11.1%; width: 11.1%; float: left; background-color : red;";
var cssB = "padding-bottom: 11.1%; width: 11.1%; float: left; background-color : black;";


function createBoard(){
	for (var i = 0; i < 99; i++) {
		var divNew = document.createElement("div");
		document.body.appendChild(divNew);
		if (i % 2 === 0) {
			div[i].style.cssText = cssR;
		}
		else{
			div[i].style.cssText = cssB;
		}
	}
}

window.onload = function(){
	createBoard();
	document.body.style.margin = "0";
};







