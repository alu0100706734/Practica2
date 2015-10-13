	var converted_;
	var converted;
	var resultC;
	var resultF;
	var resultK;
	
function Medida(){
	this.value = null;
	this.type = null;
}

function Temperatura(valor){
	this.valor = valor;
}

Temperatura.prototype = new Medida();
Temperatura.prototype.constructor = Temperatura;
Temperatura.prototype.converted_ = function (valor){

  var temp = original.value;
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*([cCkKfF])/; //cambiar con exponente
  var m = temp.match(regexp);
  if (m) {
    Medida.value = m[1];
    Medida.type = m[2];
    Medida.value = parseFloat(Medida.value); 
	
	  if (Medida.type == 'c' || Medida.type == 'C') {
      resultF = (Medida.value * 9/5)+32;
      resultF = resultF.toFixed(1)+" Farenheit  |";
	  resultK = (Medida.value + 273.15);
	  resultK = resultK.toFixed(1)+" Kelvin   |";
	  resultC = Medida.value;
	  resultC = resultC.toFixed(1)+" Celsius   |";
	  
	  
    }
    else if (Medida.type == 'f' || Medida.type =='F'){
      resultC = (Medida.value - 32)*5/9;
      resultC = resultC.toFixed(1)+" Celsius   |";
	  resultK = (Medida.value + 459.67)*5/9;
	  resultK = resultK.toFixed(1)+" Kelvin   |";
	  resultF = Medida.value;
	  resultF = resultF.toFixed(1)+" Farenheit   |";
    }
	else if (Medida.type == 'k' || Medida.type == 'K'){
		resultF = (Medida.value * 9/5) - 459.67;
		resultF = resultF.toFixed(1)+" Farenheit   |";
		resultC = Medida.value - 273.15;
		resultC = resultC.toFixed(1)+" Celsius   |";
		resultK = Medida.value;
		resultK = resultK.toFixed(1)+" Kelvin   |";
	}
  }
}

function conversorHTML(){
	entrada = document.getElementById("original");
	//converted.innerHTML = resultF;
	Temp = new Temperatura(entrada);
	
	convertedC.innerHTML = Temp.converted_(Temperatura.valor);
	convertedF.innerHTML = resultF;
	convertedK.innerHTML = resultK;
	
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