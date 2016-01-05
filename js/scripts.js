// Responsive Text
$(function() {
	$('body').flowtype({
		minimum   : 500,
		maximum   : 1200,
		minFont   : 14,
		maxFont   : 72,
		fontRatio : 72
	});

  $('div.gray-box').on('mouseenter mouseleave click', function(e) {
    e.preventDefault();
    if($(this).css('opacity') > 0) {
      $(this).animate({opacity: 0}, {duration: 'fast'});
    }else {
      $(this).animate({opacity: 0.65}, {duration: 'fast'});
    }
  });
});


// Sticky Nav
$('#nav').affix({
	offset: {
		top: $('.main-hero').height()
	}
});

// Homepage Carousel - Stop auto play on mobile
if ($(window).width() < 768) {
   $('.carousel').carousel({
	    pause: true,
	    interval: false
	});
}


