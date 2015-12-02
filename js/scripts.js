// Responsive Text
$(function() {
	$('body').flowtype({
		minimum   : 500,
		maximum   : 1200,
		minFont   : 14,
		maxFont   : 72,
		fontRatio : 72
	})
});


// Sticky Nav
$('#nav').affix({
	offset: {
		top: $('.main-hero').height()
	}
});
