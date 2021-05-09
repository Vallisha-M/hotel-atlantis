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