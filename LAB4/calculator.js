function adding() { 
  var v1 = parseInt(document.getElementById("textVal1").value); 
  var v2 = parseInt(document.getElementById('textVal2').value);
  document.getElementById("result").value = v1+v2;
 }

 function subtraction() { 
  var v1 = parseInt(document.getElementById("textVal1").value); 
  var v2 = parseInt(document.getElementById('textVal2').value);
  document.getElementById("result").value = v1-v2;
 }

 function multiplication() { 
  var v1 = parseInt(document.getElementById("textVal1").value); 
  var v2 = parseInt(document.getElementById('textVal2').value);
  document.getElementById("result").value = v1*v2;
}

 function division() { 
  var v1 = parseInt(document.getElementById("textVal1").value); 
  var v2 = parseInt(document.getElementById('textVal2').value);
  document.getElementById("result").value = v1/v2;
 }

 function remainder() { 
  var v1 = parseInt(document.getElementById("textVal1").value); 
  var v2 = parseInt(document.getElementById('textVal2').value);
  document.getElementById("result").value = v1%v2;
 }
