(function(){

	// Does it load?
	console.log("If you skate on the thin ice of modern life, don't be surprised when a crack in the ice appears under your feet.");

	// Smooth scrolling from navbar
	$('li > a').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 500);
		return false;
	});

	// Smooth scrolling from buttons
	$('a.btn').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 500);
		return false;
	});

	// Change active class on navbar
	$('.nav > li > a').on('click', function() {
		$(this).parent('li').addClass('active')
		       .siblings('li').removeClass('active');
	});

	var $window = $(window),
		$stickyEl = $('nav'),
		elTop = $stickyEl.offset().top;

//	console.log('elTop = ' + elTop);

	$window.scroll(function() {
		$stickyEl.toggleClass('navbar-fixed-top', $window.scrollTop() > elTop);
	});

})();
