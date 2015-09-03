'use-strict';

function resize(){
	var h = $('.vid-full img').width();
	$('.vid-med img').height(h/2);
}

$(window).resize(resize);

$(document).ready(function() {
	$('.type-h1').typed({
		strings: ["savi", "sabino_velasquez"],
		typeSpeed: 50,
		showCursor: true,
		cursorChar: "|",
		startDelay: 0
	});
	$('.type-h2').typed({
		strings: ["Hi, I'm a developer"],
		typeSpeed: 50,
		showCursor: true,
		cursorChar: "|",
		startDelay: 3700
	});
	var options = { videoId: 'Q0iOS_8BsdM', start: 0 };
	$('#how').tubular(options);
	$('.parallax').parallax();
	resize();
	$('footer a').click(function(){
		var url = $(this).attr('href');
		ga('send', 'event', 'Redes Sociales', 'click', url);
		// console.log(url);
	});
});