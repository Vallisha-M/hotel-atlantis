function validateForm() {
		var errors = 0;
		var height = 285;
		var flag = true;	
		var str = document.forms["login"]["email"].value;
		var patt = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
		var result = str.match(patt);
		str = str.trim();
		var spaceFlag = true?(str.indexOf(' ')>-1):false;
		{
			if(spaceFlag||result == null){	
				flag = false;
				errors = errors+1;
				$("#email").css("border-color", "red");
				$("#email").css("background-color", "rgba(255,0,0,0.3)");
				document.getElementById("fail1").innerHTML = "Enter a valid email address";
			}
			else {
				$("#email").css("border-color", "green");
				$("#email").css("background-color", "white");
				document.getElementById("fail1").innerHTML = null;
			}	
		}
		var pass = document.forms["login"]["password"].value;
		{
			if(pass == "") {
				$("#password").css("border-color", "red");
				$("#password").css("background-color", "rgba(255,0,0,0.3)");
				errors = errors+1;
				flag = false;
				document.getElementById("fail2").innerHTML = "Enter the password";
			}
			else {
				$("#password").css("border-color", "green");
				$("#password").css("background-color", "white");
				document.getElementById("fail2").innerHTML = null;
			}
		}
		height = height+(errors*18);
		height = height.toString()+"px";
		$(".main").css("height", height);
		return flag;
	}