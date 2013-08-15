var indexToDays = "SU MO TU WE TH FR SA".split(' ');
var i = 0;
$(function(){
	updateTime();
	var day = $('#day');
	var now = moment().format("d");
	day.text(indexToDays[now[0]]);

});


function updateTime() {
	// def variaveis
	var hours = $('#hours');
	var minutes = $('#minutes');
	var seconds = $('#seconds');
	// var ampm = $('#ampm');

	var now = moment().format("hhmmssdA");
	hours.text(now[0] + now[1]);
	minutes.text(now[2] + now[3]);
	seconds.text(now[4] + now[5]);
	rotateHands(now[4]+now[5],now[2] + now[3],now[0] + now[1]);
	if (now[7] === 'A'){
		$('#am').addClass('active');
		$('#pm').addClass('inactive');
	} else {
		$('#pm').addClass('active');
		$('#am').addClass('inactive');
	}

	setTimeout(updateTime, 1000);
}

function rotateHands(sec,min,hour) {
	var degSec = 360/60*sec;
	var degMin = 360/60*min;
	var degHour = 360/12*hour;

	var sHand = $('#secondhand');
	sHand.css({
        "-webkit-transform": "rotate(" + degSec + "deg)",
        "-moz-transform": "rotate(" + degSec + "deg)",
        "transform": "rotate(" + degSec + "deg)" /* For modern browsers(CSS3)  */
    });

	var mHand = $('#minutehand');
	mHand.css({
        "-webkit-transform": "rotate(" + degMin + "deg)",
        "-moz-transform": "rotate(" + degMin + "deg)",
        "transform": "rotate(" + degMin + "deg)" /* For modern browsers(CSS3)  */
    });

	var hHand = $('#hourhand');
	hHand.css({
        "-webkit-transform": "rotate(" + degHour + "deg)",
        "-moz-transform": "rotate(" + degHour + "deg)",
        "transform": "rotate(" + degHour + "deg)" /* For modern browsers(CSS3)  */
    });


	// setTimeout(rotateMinuteHand, 1000);
}


function rotateMinuteHand_old() {
	var mHand = $('#minutehand');
	console.log(mHand.css("transform"));
	console.log(mHand.css("-webkit-transform"));
	console.log(mHand.css("-o-transform"));
	mHand.css({
        "-webkit-transform": "rotate(90deg)",
        "-moz-transform": "rotate(90deg)",
        "transform": "rotate(90deg)" /* For modern browsers(CSS3)  */
    });

	// Obtaining Style
	var st = mHand.css('-webkit-transform') || mHand.css('-moz-transform') || mHand.css('transform": "rotate(90deg)');
	console.log(st);

	console.log(i*20);
	i++;
	// setTimeout(rotateMinuteHand, 1000);
}


