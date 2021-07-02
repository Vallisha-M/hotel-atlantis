function validateForm() {
  
  var describedText = document.forms["form"]["describe"].value;
  if (describedText == "") {
    alert("Describe your event");
    return false;
  
  }
    selectedDate = (document.forms["form"]["date"].value);
    if(selectedDate == "") {
        alert("Select a Date");
        return false;
    }
    
    var today = new Date();
    var dd = parseInt(String(today.getDate()).padStart(2, '0'));
    var mm = parseInt(String(today.getMonth() + 1).padStart(2, '0')); //January is 0
    var yyyy = parseInt(today.getFullYear());
    var yyyy1 = parseInt(selectedDate.slice(0,4));
    var mm1 = parseInt(selectedDate.slice(5, 7));
    var  dd1= parseInt(selectedDate.slice(8, 10));
    var valueToday = dd+mm*30+yyyy*365;
    var valueSelected = dd1+mm1*30+yyyy1*365;
    
    if(valueToday>valueSelected){
        alert("Enter correct date");
        return false;
    }
}
function refresh(){

var guest = document.getElementById("guestSelect");
var guests = guest.value;

if(guests == "")
{
  $("#guests").css("color", "red");
  guests = "Guests not Selected";
}/*
else {
  $("#guests").css("color", "black");
  alert("hey1");
}*/
document.getElementById("guests").innerHTML = guests;

selectedDate = (document.forms["form"]["date"].value); 
if(selectedDate == "") {
  $("#dateSelected").css("color", "red");
  selectedDate = "Date not selected";
}
else  
$("#dateSelected").css("color", "black");
document.getElementById("dateSelected").innerHTML = selectedDate;



}