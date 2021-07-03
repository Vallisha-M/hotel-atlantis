<<<<<<< HEAD
$(document).ready(function () {
	var day = "";
	$(function () {
		$("#datepicker").datepicker({
			daysOfWeekHighlighted: "1,3,6",
			dateFormat: "mm/dd/yy",
			changeYear: true,
			changeYear: true,
			minDate: new Date(2016, 02 - 1, 02),
			maxDate: new Date(2016, 02 - 1, 18),
			onSelect: function (dateText, inst) {
				var date = $(this).datepicker("getDate");
				day = date.getDay();
				alert();
			},
		});
	});
});
=======
$(document).ready(function(){
var day='';
$(function() {
    $( "#datepicker" ).datepicker({
       daysOfWeekHighlighted: "1,3,6",
        dateFormat: "mm/dd/yy",
        changeYear: true,
        changeYear: true,
        minDate: new Date(2016, 02 - 1, 02),
        maxDate: new Date(2016, 02 - 1, 18),
         onSelect: function(dateText, inst) { 
            var date = $(this).datepicker('getDate');
            day=date.getDay();
            alert();
            }
    });
});
})
>>>>>>> 3870144afadefd69750864ddc2e3b827cae6d3d8
