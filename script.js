window.onload = function(){
	createBoard();
	document.body.style.margin = "0";
};

var div = document.getElementsByTagName("div");
var cssR = "padding-bottom: 11.1%; width: 11.1%; float: left;";
var color1 = getOneColor();
var color2 = getOneColor();

function createBoard(){
	var n = 1;
	for (var i = 0; i < 99; i++) {
		var divNew = document.createElement("div");
		document.body.appendChild(divNew);
		div[i].style.cssText = cssR;
		if (i%9===0 && i!==0) {
			n=n-0.1;
		}
		if (i%2===0) {
			div[i].style.backgroundColor= color1;
			div[i].style.opacity= n;
		}
		else{
			div[i].style.backgroundColor= color2;
			div[i].style.opacity= n;
		}
	}
}

function getOneColor(){
	var hex = '0123456789ABCDEF'.split("");
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        	color = color + hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
