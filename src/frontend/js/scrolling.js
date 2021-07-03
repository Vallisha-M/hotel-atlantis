<<<<<<< HEAD
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navbar").style.top = "0";
	} else {
		document.getElementById("navbar").style.top = "-50px";
	}
	prevScrollpos = currentScrollPos;
};
=======
const scrolling = function () {
  var prevScrollpos = window.pageYOffset
  window.onscroll = () => {
    var currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0px"
    } else {
      document.getElementById("navbar").style.top = "-50px"
    }
    prevScrollpos = currentScrollPos
  }
}
export default scrolling
>>>>>>> 3870144afadefd69750864ddc2e3b827cae6d3d8
