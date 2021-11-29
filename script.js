function bold(){
	var x = document.getElementById("txt");
	x.style.fontWeight = "bold";
}
function italic(){
	var x = document.getElementById("txt");
	x.style.fontStyle  = "italic";
}
function underline(){
	var x = document.getElementById("txt");
	x.style.textDecoration = "underline";
}
function color(){
	var x = document.getElementById("txt");
	x.style.color = "red";
}
function left(){
	var x = document.getElementById("txt");
	x.style.textAlign = "left";
}
function center(){
	var x = document.getElementById("txt");
	x.style.textAlign = "center";
}
function right(){
	var x = document.getElementById("txt");
	x.style.textAlign = "right";
}
function justify(){
	var x = document.getElementById("txt");
	x.style.textAlign = "justify";
}
function changeStyle(){
	var x = document.getElementById("txt");
	x.style.fontFamily = "scream real";
}
function changeSize(){
	var x = document.getElementById("txt");
	x.style.fontSize = "35px";
}
function a(){
	window.alert("This is Only Interface");
}
function b(){
	var x = document.getElementById("menu");
	x.style.display = "none";
}
function view(){
	var x = document.getElementById("menu");
	x.style.display = "block";
	x.style.position = "relative";
	x.style.top = "-60px"
}
function off(){
	var x = document.getElementById("page");
	x.style.display = "none";
}
function op(){
	var x = document.getElementById("in-page");
	var y = document.getElementById("new");
	x.style.display = "block";
	y.style.display = "none";
}
