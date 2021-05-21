var x,
	y,
	z,
	diff = 0,
	ms,
	amt,
	d;
function price() {
	diff = 0;
	ms = 24 * 60 * 60 * 1000;
	x = new Date(document.forms["booking"]["checkindate"].value);
	y = new Date(document.forms["booking"]["checkoutdate"].value);
	z = document.forms["booking"]["roomtype"].value;
	diff = Math.floor((y - x) / ms);
	if (diff >= 0) {
		if (z === "default") return;
		else if (z === "standard_room") amt = 100 * diff;
		else if (z === "deluxe_room") amt = 200 * diff;
		else if (z === "suite") amt = 350 * diff;
		document.getElementById("amount").innerHTML = amt;
		console.log(amt);
		localStorage.setItem("amt1", amt);
	}
}

d = new Date();
var n = d.getTime();
n -= 86400000;
d = new Date(n);

function check() {
	x = new Date(document.forms["booking"]["checkindate"].value);
	y = new Date(document.forms["booking"]["checkoutdate"].value);
	localStorage.setItem("x1", x);
	localStorage.setItem("y1", y);
	if (x > y) {
		alert(
			"Invalid selection of dates. The check-out date cannot be earlier than the check-in date."
		);
		return false;
	}
	if (x < d) {
		alert("Invalid selection of check-in date.");
		return false;
	}
}
