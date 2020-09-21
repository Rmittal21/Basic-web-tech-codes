function validateForm()
{
	var firstname= document.getElementById("fname").value;
	if(firstname=="")
    	{
        	alert("First name can't be empty");
        	return false;
    	}
	else if(firstname < 5)
    	{
        	alert("Please use a name of more than 5 characters.");
        	return false;
    	}
	else
    	{
        	return true;
    	}
	var lastname= document.getElementById("lname").value;
	if(lastname=="")
    	{
        	alert("Last name can't be empty");
        	return false;
    	}
	else if(lastnamename > 20)
    	{
        	alert("Please use a short name of 10 characters.");
        	return false;
    	}
	else
    	{
        	return true;
    	}
    
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(document.getElementById("email").value.match(mailformat))
	{
    	document.register.email.focus();
    	return true;
	}
	else
	{
    	alert("You have entered an invalid email address!");
    	document.register.email.focus();
    	return false;
	}
}

var check = function() {
  if (document.getElementById('password').value != document.getElementById('cpassword').value)
  {
	alert("Both the passwords are not same");
	return false;
 	 
  } else {
  	return true;
 	 
  }
}
