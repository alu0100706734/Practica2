
function Medida(){
	this.value = null;
	this.type = null;
}

function Temperatura(valor){
	this.valor = valor;
}

Temperatura.prototype = new Medida();
Temperatura.prototype.constructor = Temperatura;

Temperatura.prototype.converted_ = function (converted){
  var temp = original.value;
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*([cCkKfF])/; //cambiar con exponente
  
  var m = temp.match(regexp);
  
  if (m) {
    var num = m[1];
    var type = m[2];
    num = parseFloat(num); 
	
		    if (converted == 'c' || converted == 'C') {
      resultF = (num * 9/5)+32;
      resultF = resultF.toFixed(1)+" Farenheit  |";
	  resultK = (num + 273.15);
	  resultK = resultK.toFixed(1)+" Kelvin   |";
	  resultC = num;
	  resultC = resultC.toFixed(1)+" Celsius   |";
	  
    }
    else if (converted == 'f' || converted =='F'){
      resultC = (num - 32)*5/9;
      resultC = resultC.toFixed(1)+" Celsius   |";
	  resultK = (num + 459.67)*5/9;
	  resultK = resultK.toFixed(1)+" Kelvin   |";
	  resultF = num;
	  resultF = resultF.toFixed(1)+" Farenheit   |";
    }
	else if (converted == 'k' || converted == 'K'){
		resultF = num * 9/5 - 459.67;
		resultF = resultF.toFixed(1)+" Farenheit   |";
		resultC = num - 273.15;
		resultC = resultC.toFixed(1)+" Celsius   |";
		resultK = num;
		resultK = resultK.toFixed(1)+" Kelvin   |";
	}
  }
}

function conversorHTML(converted){
	input = document.getElementById("original")
}







/*"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var resultF;
  var resultC;
  var resultK;
  var temp = original.value;
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*([cCkKfF])/;
  
  var m = temp.match(regexp);
  
  if (m) {
    var num = m[1];
    var type = m[2];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      resultF = (num * 9/5)+32;
      resultF = resultF.toFixed(1)+" Farenheit  |";
	  resultK = (num + 273.15);
	  resultK = resultK.toFixed(1)+" Kelvin   |";
	  resultC = num;
	  resultC = resultC.toFixed(1)+" Celsius   |";
	  
    }
    else if (type == 'f' || type =='F'){
      resultC = (num - 32)*5/9;
      resultC = resultC.toFixed(1)+" Celsius   |";
	  resultK = (num + 459.67)*5/9;
	  resultK = resultK.toFixed(1)+" Kelvin   |";
	  resultF = num;
	  resultF = resultF.toFixed(1)+" Farenheit   |";
    }
	else if (type == 'k' || type == 'K'){
		resultF = num * 9/5 - 459.67;
		resultF = resultF.toFixed(1)+" Farenheit   |";
		resultC = num - 273.15;
		resultC = resultC.toFixed(1)+" Celsius   |";
		resultK = num;
		resultK = resultK.toFixed(1)+" Kelvin   |";
	}
	
	convertedF.innerHTML = resultF;
	convertedC.innerHTML = resultC;
	convertedK.innerHTML = resultK;


	
  }
  
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }
}*/