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

	// Monitor

		// var monitorCode = $('.monitor__code');

		// monitorCode.each(function(){
		// 	$(this).typeIt();
		// });
		$('.type-it').each(function(){
			$(this).typeIt({
				startDelay: $(this).attr('data-delay') ? parseFloat($(this).attr('data-delay')) : 250,
				cursor: false
			});
		});
		

		// var text = $(this).attr('data-text');
		// $("#monitor-line-1").typeIt({
		// 	strings: '<!DOCTYPE html>'
		// });

	// Navigation

		var sections = $('.js-section');	
		var navigationLinks = $('.vnav__menu a');
		var navigation = $('.vnav');
		var navigationHeight = navigation.height();

		//set scrolling variables
		var scrolling = false,
			previousTop = 0,
			currentTop = 0,
			scrollDelta = 10,
			scrollOffset = 150;

		function highlightingLinks(){
			var windowScroll = $(window).scrollTop();

			sections.each(function(){
				var currentSection = $(this);
				var sectionTop = currentSection.offset().top;
				
				
				if( windowScroll >= (sectionTop - navigation.outerHeight()) ){
					var id = currentSection.attr('id');
					navigationLinks.removeClass('active');
					$(".vnav__menu a[href='#" + id + "']").addClass('active');
				}
			});
		}

		function autoHideHeader() {
			var currentTop = $(window).scrollTop();

			checkSimpleNavigation(currentTop);

		  previousTop = currentTop;
			scrolling = false;
		}

		function checkSimpleNavigation(currentTop) {
			//there's no secondary nav or secondary nav is below primary nav
		    if (previousTop - currentTop > scrollDelta) {
		    	//if scrolling up...
		    	navigation.removeClass('is-hidden');
		    } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
		    	//if scrolling down...
		    	navigation.addClass('is-hidden');
		    }
		}

		highlightingLinks();

		$(window).on('resize', function(){
			navigationHeight = navigation.height();
		});

		$(window).on('scroll', function(){

			highlightingLinks();

			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame)
					? setTimeout(autoHideHeader, 250)
					: requestAnimationFrame(autoHideHeader);
			}
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
		function kitchenSwitch(el, elNot, elToggle){
			$(el).not(elNot).removeClass('active');
			elToggle.toggleClass('active');
		}
		$('.kitchen__pan').each(function(){
			$(this).click(function(){
				var panAttr = $(this).attr('data-kitchen-skill');
				var bulbWithPanAttr = $(" [data-kitchen-lamp='" + panAttr + "'] ");

				kitchenSwitch('.kitchen__lamp-inner > div', bulbWithPanAttr, bulbWithPanAttr);
				kitchenSwitch('.kitchen__table > div', $(this), $(this));
			});
		});

});	