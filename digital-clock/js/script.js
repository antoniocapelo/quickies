// Days' names
var indexToDays = "SU MO TU WE TH FR SA".split(' ');

$(function(){
	updateTime();
	var day = $('#day');
	var now = moment().format("d");
	day.text(indexToDays[now[0]]);

});


function updateTime() {
	// Aux variables
	var hours = $('#hours');
	var minutes = $('#minutes');
	var seconds = $('#seconds');

	// Get time from moment.js with specified format
	var now = moment().format("hhmmssdA");
	hours.text(now[0] + now[1]);
	minutes.text(now[2] + now[3]);
	seconds.text(now[4] + now[5]);
	rotateHands(now[4]+now[5],now[2] + now[3],now[0] + now[1]);

	// Set AM or PM
	if (now[7] === 'A'){
		$('#am').addClass('active');
		$('#pm').addClass('inactive');
	} else {
		$('#pm').addClass('active');
		$('#am').addClass('inactive');
	}

	setTimeout(updateTime, 1000);
}
