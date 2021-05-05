var isalpha = function(ch){
    return /^[A-Z]$/i.test(ch);
}
var isdigit = function(ch){
return /^[0-9]$/i.test(ch);
}
var ischar = function(ch){
return !isalpha(ch)&&!isdigit(ch);
}
var isPass = function(str) {
var len  = str.length;
var i = 0;
var a = false;
var n = false;
var c = false;
for(i = 0;i<len;i = i+1) {
  if(!a) {
      if(isalpha(str[i])) {
          a = true;
          continue;
      }	
  }
  if(!n) {
      if(isdigit(str[i])) {
          n = true;
          continue;
      }
  }
  if(!c) {
      if(ischar(str[i])) {
          c = true;
          continue;
      }
  }
  break;
}
return a&&n&&c;
}
function validateForm() {
var errors = 0;
var height = 550;	
var str = document.forms["login"]["email"].value;
var patt = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
var result = str.match(patt);
str = str.trim();
var num = document.forms["login"]["pno"].value;
var fname = document.forms["login"]["fname"].value;
var lname = document.forms["login"]["lname"].value;
var alpha = false;
var len = 0;
num = num.trim();
var numLen = num.length;
var numFlag = true;
var i = 0;
if(numLen != 10) {
    $("#pno").css("border-color", "red");
    $("#pno").css("background-color", "rgba(255, 0, 0, 0.1)");
    errors = errors+1;
    document.getElementById("fail6").innerHTML = "Enter a valid Phone Number";
}
else {
    for(i=0;i<10;i++) {
        if(!isdigit(num[i])) {
            numFlag = false;
            break;
        }
    }
    if(!numFlag) {
    $("#pno").css("border-color", "red");
    $("#pno").css("background-color", "rgba(255, 0, 0, 0.1)");
    errors = errors+1;
    document.getElementById("fail6").innerHTML = "Enter a valid Phone Number";
    }
    else {
        $("#pno").css("background-color", "rgba(255, 255, 255, 1)");
      $("#pno").css("border-color", "green");
      document.getElementById("fail6").innerHTML = null;
    }
}

{
  len = fname.length;
  for(i = 0;i<len; i = i+1) {	
      if(!isalpha(fname[i])) {
          alpha = true;
          break;
      }
  }
  if(alpha || fname=="") {
      $("#fname").css("border-color", "red");
      $("#fname").css("background-color", "rgba(255, 0, 0, 0.1)");
      errors = errors+1;
      document.getElementById("fail1").innerHTML = "Enter a valid First Name";
  }
  else {
      $("#fname").css("background-color", "rgba(255, 255, 255, 1)");
      $("#fname").css("border-color", "green");
      document.getElementById("fail1").innerHTML = null;
  }
}
alpha = false;
{
  len = lname.length;
  for(i = 0;i<len; i = i+1) {	
      if(!isalpha(lname[i])) {
          alpha = true;
          break;
      }
  }
  if(alpha || lname=="") {
      $("#lname").css("border-color", "red");
      $("#lname").css("background-color", "rgba(255, 0, 0, 0.1)");
      errors = errors+1;
      document.getElementById("fail2").innerHTML = "Enter a valid Last Name";
  }
  else {
      $("#lname").css("background-color", "rgba(255, 255, 255, 1)");
      $("#lname").css("border-color", "green");
      document.getElementById("fail2").innerHTML = null;
  }
}
var spaceFlag = true?(str.indexOf(' ')>-1):false;
{
  if(spaceFlag||result == null){	
      $("#email").css("border-color", "red");
      $("#email").css("background-color", "rgba(255, 0, 0, 0.1)");
      errors = errors+1;
      document.getElementById("fail3").innerHTML = "Enter a valid email address";
  }
  else {
      $("#email").css("background-color", "rgba(255, 255, 255, 1)");
      $("#email").css("border-color", "green");
      document.getElementById("fail3").innerHTML = null;
  }	
}
var pass = document.forms["login"]["password"].value;
{
  var message = null;
  if(pass == "") {
      message = "Enter Password";
  }
  else if(!isPass(pass)) {
      errors = errors+2;
      message = "Password must contain atleast 1 alphabet, 1 digit and   1 special character"
  }
  {
      if(message != null) {
          $("#password").css("border-color", "red");
          $("#password").css("background-color", "rgba(255, 0, 0, 0.1)");
          errors = errors+1;
          flag = false;
      }
      else {
          $("#password").css("background-color", "rgba(255, 255, 255, 1)");
          $("#password").css("border-color", "green");	
      }
  }
  document.getElementById("fail4").innerHTML = message;
}
var pass1 = document.forms["login"]["confirm"].value;
{
  if(pass1 == "") {
      $("#confirm").css("border-color", "red");
      $("#confirm").css("background-color", "rgba(255, 0, 0, 0.1)");
      errors = errors+1;
      document.getElementById("fail5").innerHTML = "Renter the password";
  }
  else if(pass1!=pass) {
      $("#confirm").css("border-color", "red");
      $("#confirm").css("background-color", "rgba(255, 0, 0, 0.1)");
      errors = errors+1;
      document.getElementById("fail5").innerHTML = "Re-entered password does not match";
  }
  else {
      $("#confirm").css("background-color", "rgba(255, 255, 255, 1)");
      $("#confirm").css("border-color", "green");
      document.getElementById("fail5").innerHTML = null;
  }
}
height = height+(errors*15);
height = height.toString()+"px";
$(".main").css("height", height);
return errors==0;
}