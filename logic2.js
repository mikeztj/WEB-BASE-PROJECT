function validate(){
	var email = document.getElementsByName("email")[0].value;
  	var username = document.getElementsByName("username")[0].value;
	var password = document.getElementsByName("password")[0].value;
	var conpass = document.getElementsByName("conpass")[0].value;
	var country = document.getElementById("country");
	var address = document.getElementsByName("address")[0].value;
	var platform = document.getElementById("platform");
 	var agree= document.getElementById("agree");
	var error=  document.getElementById("error");

  if(email == "")
  {
    error.innerHTML="Email must be filled";
  }
  else if(!email.includes('@') || !email.includes('.'))
	{
		error.innerHTML= "email must content @ & .";
	}
	else if(email.startsWith('@'))
	{
		error.innerHTML= "email cannot be start wih @";
	}
  else if (email.endsWith('.'))
  {
    error.innerHTML= "email cannot be end wih .";
  }
  else if (checkadd(email) == false)
  {
    error.innerHTML= "email @ cannot be double";
  }
  else if(username == "")
	{
		error.innerHTML= "username must be filled";
	}
  else if(username.length < 5 || username.length > 15)
	{
		error.innerHTML= "Username’s length must be between 5 and 15 characters";
	}
	else if(username.charAt(0) != username.charAt(0).toUpperCase())
	{
		error.innerHTML= "Username’s first character must be uppercase";
	}
	else if(checkalpha(username) == false)
	{
		error.innerHTML= "Username must be alphabetic";
	}
  else if(password == "")
	{
		error.innerHTML= "password must be filled";
	}
  else if(password.length < 5 || password.length > 10)
  {
    error.innerHTML= "Password’s length must be between 5 and 10 characters";
  }
	else if(checkalphanum(password) == false)
	{
		error.innerHTML= "password must be alpha numeric";
	}
  else if(conpass != password)
	{
		error.innerHTML= "Confirm password must be match with Password";
	}
  else if( country.selectedIndex == "0")
   {
   		error.innerHTML= "country must be choosen";
   }
  else if(address == "")
	{
		error.innerHTML= "Address must be filled";
	}
  else if(!address.endsWith('Street'))
  {
    error.innerHTML= "Address must be ended with “Street”";
  }
  else if(checkspace(address) == false)
  {
    error.innerHTML= "Address must contain 2 word only ";
  }
  else if(platform.selectedIndex == "0")
  {
   	error.innerHTML= "platform must be choosen";
  }
  else if(agree.checked == false)
	{
		error.innerHTML= "you must agree ";
	}
  else
	{
		error.innerHTML= " ";
	}
}

function checkalpha(username)
{
	var counter = 0;
	for(var i =0; i < username.length; i++)
	{
		if(isNaN(username.charAt(i)) == false)
		{
			counter ++
		}
	}
	if(counter > 0)
	{
		return false;
	}
	else
	{
		return true;
	}
}

function checkadd(email)
{
	var counter = 0;
	for(var i =0; i < email.length; i++)
	{
		if(email.charAt(i)=='@')
		{
			counter ++
		}
	}
	if(counter > 1)
	{
		return false;
	}
	else
	{
		return true;
	}
}

function checkspace(address)
{
	var counter = 0;
	for(var i =0; i < address.length; i++)
	{
		if(address.charAt(i)==' ')
		{
			counter ++
		}
	}
	if(counter == 0)
	{
		return false;
	}
	else
	{
		if(counter > 1){
			return false;
		}
		else if(address.charAt(0) == ' '){
			return false;
		}
		else
		{
		return true;
		}
	}
}

function checkalphanum(password)
{
	var counteralpha = 0;
	var counternumber = 0;
	for(var i =0; i < password.length; i++)
	{
		if(isNaN(password.charAt(i)) == false)
		{
			counternumber++;
		}

		if(isNaN(password.charAt(i)) == true)
		{
			counteralpha++;
		}
	}

	if(counternumber == 0 || counteralpha == 0)
	{
		return false;
	}
	else
	{
		return true;
	}
}
