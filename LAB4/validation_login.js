function validateForm(inputText)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(inputText.value.match(mailformat))
	{
    	document.login.email.focus();
    	return true;
	}
	else
	{
    	alert("You have entered an invalid email address!");
    	document.login.email.focus();
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
