$(document).ready(function(){
	function log(logText){
		console.log(logText);
	}

	function scroll(scrollLink, speed){
		$('html, body').animate({
			scrollTop: scrollLink.offset().top
		}, speed);
		return false;
	}

	// Scroll to block
		$('.anchor').click(function(e){
			e.preventDefault();
			scroll($( $(this).attr('href') ), 1500);
		});


	// Initialize menu carousel

		$(".owl-carousel").owlCarousel({
			items: 3,
			loop: true,
			responsive: {
				768: {
					items: 6,
					mouseDrag: false,
					toucheDrag: false,
					loop: false,
				}
			}
		});

});	