"use strict";function calculate(){var e,i=original.value,t=/([-+]?\d+(?:\.\d*)?)\s*([fFcC])/,n=i.match(t);if(n){var a=n[1],r=n[2];a=parseFloat(a),"c"==r||"C"==r?(e=9*a/5+32,e=e.toFixed(1)+" Farenheit"):(e=5*(a-32)/9,e=e.toFixed(1)+" Celsius"),converted.innerHTML=e}else converted.innerHTML="ERROR! Try something like '-4.2C' instead"}