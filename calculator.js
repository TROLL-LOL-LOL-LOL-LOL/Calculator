// JavaScript Document

// Change Display
function d(val) {
	document.getElementById("d").value = val;
}

// Type numbers and operators
function v(val) {
	if(val == '.'){
		if(period === false) {
	document.getElementById("d").value += val;
	period = true;
}	
else if(val === "+") || val === "-"{
	
}

// Evaluate the equation
function e() {
	try {
		d(eval(document.getElementById("d").value));
	}
	catch(err) {
		d("Error");
	}
}

//Change color
function c{
document.body.style.backgroundColor = "black"
}


//The pie function in javascript
