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
			var el = $($(this).attr('href'));
			el.length ? scroll(el, 1500) : '';
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

	// Our Skills
		var kitchenBulb = $('.kitchen__bulb');
		var kitchenPan = $('.kitchen__pan');
		function kitchenRemoveCLass(el){
			el.each(function(){
				$(this).removeClass('active');
			});
		}
		$('.kitchen__pan').each(function(){
			$(this).click(function(){
				var panAttr = $(this).attr('data-kitchen-skill');
				var bulbWithPanAttr = $(" [data-kitchen-lamp='" + panAttr + "'] ");

				kitchenRemoveCLass(kitchenBulb);
				kitchenRemoveCLass(kitchenPan);

				bulbWithPanAttr.addClass('active');
				
				$(this).addClass('active');
			});
		});

});	