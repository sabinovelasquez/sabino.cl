'use-strict';

function resize(){
	var h = $('.vid-full img').width();
	$('.vid-med img').height(h/2);
}

$(window).resize(resize);

$(document).ready(function() {
	var options = { videoId: 'Q0iOS_8BsdM', start: 3 };
	$('#how').tubular(options);
	$('.parallax').parallax();
	resize();
});