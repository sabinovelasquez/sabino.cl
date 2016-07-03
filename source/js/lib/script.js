'use-strict';

var timelineBlocks = $('.cd-timeline-block'),
	offset = 0.8;

hideBlocks(timelineBlocks, offset);

function resize(){
	var h = $('.vid-full img').width();
	$('.vid-med img').height(h/2);
	$('.vid-full video').height(h);
	$('.vid-full img').height(h);
}
function hideBlocks(blocks, offset) {
	blocks.each(function(){
		( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
	});
}
function showBlocks(blocks, offset) {
	blocks.each(function(){
		( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
	});
}

$(window).on('scroll', function(){
	(!window.requestAnimationFrame)
	? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
	: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
});
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

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_EN/sdk.js#xfbml=1&version=v2.4&appId=185131048484498";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));