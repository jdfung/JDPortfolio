/**
 * 
 */

//change input box to red
function changeColRed(e)
{
	e.style.border = "1px solid red";
}

//change input box to green
function changeColGreen(e)
{
	e.style.border = "1px solid #18d26e";
}

//validate function
function validate()
{

	let Name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let phone = document.getElementById("phone").value;
	let message = document.getElementById("message").value;
	
	let NamePat = document.getElementById("name");
	let emailPat = document.getElementById("email");
	let phonePat = document.getElementById("phone");
	let messagePat = document.getElementById("message");
	
	let error_message = document.getElementById("error_message");
	error_message.style.padding = "10px";
	
	let text;
	var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	
	if(Name.length < 5)
	{
		text="Please enter a valid name";
		error_message.innerHTML = text;
		
		changeColRed(NamePat);
		return false;
	}else{
		changeColGreen(NamePat);
	}
	
	if(!email.match(pattern) || email.length<6)
	{
		text="Please enter a valid email";
		error_message.innerHTML = text;
		changeColRed(emailPat);
		return false;
	}else{
		changeColGreen(emailPat);
	}
	
	if(isNaN(phone) | phone.length<10)
	{
		text="Please enter a valid phone number";
		error_message.innerHTML = text;
		changeColRed(phonePat);
		return false;
	}else{
		changeColGreen(phonePat);
	}
	
	if(message.length < 50)
	{
		text="Please enter a message more than 50 characters";
		error_message.innerHTML = text;
		changeColRed(messagePat);
		return false;
	}else{
		changeColGreen(messagePat);
	}
	
		text = [];
		changeColGreen(NamePat);
		changeColGreen(emailPat);
		changeColGreen(phonePat);
		changeColGreen(messagePat);
		error_message.innerHTML = text;
		alert("Message sent succesfully");
		return true;
}