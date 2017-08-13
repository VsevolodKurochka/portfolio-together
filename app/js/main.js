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

		$('.kitchen__pan').each(function(){
			$(this).click(function(){
				var kitchenSkill = $(this).attr('data-kitchen-skill');
				var thisKitchenBulb = $(" [data-kitchen-lamp='" + kitchenSkill + "'] ");
				
				kitchenBulb.each(function(){
					$(this).removeClass('active');
				});
				thisKitchenBulb.addClass('active');
				
				$('.kitchen__pan').not($(this)).removeClass('active');
				$(this).addClass('active');
				// $('.kitchen__pan').each(function(){
				// 	$(this).removeClass('active');
				// });
				// $(this).addClass('active');
			});
		});

});	