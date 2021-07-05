$(document).ready(function () {
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > 500) {
			$(".navbar").css("background", "rgba(255, 255,255,1)");
			$(".navbar").css("border", "3px solid #ffc800");
			$(".button1").css("color", "#ffc800");
		} else {
			$(".navbar").css("background", "rgba(0,0,0,0)");
			$(".navbar").css("border", "3px solid #ffc80000");
			$(".button1").css("color", "white");
		}
	});
});
