function required()
{
	var emp = document.forms["form1"]["text1"].value;
	if(emp == ""){
		alert("Input a value, field cannot be empty");
		return false;
	}
	else{
		alert("value accepted");
		return true;
	}
}
