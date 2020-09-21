function displayMessage()
		{
            	document.getElementById("demo").innerHTML = "Hello, this is sample message.";
        	}
        	function myFunction2()
        	{
            	var x = document.getElementById("fname");
            	x.value = x.value.toUpperCase();
        	}
        	function focusFunction()
        	{
            	document.getElementById("myInput").style.background = "lightblue";
        	}
        	function blurFunction()
        	{
            	document.getElementById("myInput").style.background = "yellow";
        	}
        	function pageLoad()
        	{
            	alert("Page is loaded");
        	}
        	function confirmInput()
        	{
            	fname = document.forms[0].fname.value;
            	alert("Hello " + fname);
        	} 