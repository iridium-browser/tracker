/*
	Gravity by Pixelarity
	pixelarity.com @pixelarity
	License: pixelarity.com/license
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Touch mode.
			if (skel.vars.mobile)
				$body.addClass('is-touch');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				alignment: ($body.hasClass('landing') ? 'center' : 'right'),
				hideDelay: 400
			});

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#navPanel" class="toggle"></a>' +
						'<span class="title">' + $('#logo').html() + '</span>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navPanel')
						.css('transition', 'none');

		// Carousel.
			$('.carousel').each(function() {

				var	$this = $(this);

				if (!skel.vars.touch) {

					$this.css('overflow-x', 'hidden');

					// Wrapper.
						$this.wrap('<div class="carousel-wrapper" />');
						var $wrapper = $this.parent();

					// Nav.
						var	$navRight = $('<div class="nav right"></div>').insertAfter($this),
							$navLeft = $('<div class="nav left"></div>').insertAfter($this),
							intervalId;

						$navLeft
							.on('mouseenter', function() {
								intervalId = window.setInterval(function() {
									$this.scrollLeft( $this.scrollLeft() - 5 );
								}, 10);
							})
							.on('mouseleave', function() {
								window.clearInterval(intervalId);
							});

						$navRight
							.on('mouseenter', function() {
								intervalId = window.setInterval(function() {
									$this.scrollLeft( $this.scrollLeft() + 5 );
								}, 10);
							})
							.on('mouseleave', function() {
								window.clearInterval(intervalId);
							});

					// Events.
						$window
							.on('resize load', function() {

								if ($this.width() < $this.prop('scrollWidth'))
									$wrapper.removeClass('no-scroll');
								else
									$wrapper.addClass('no-scroll');

							});

				}

				// Poptrox.
					var p = {
						baseZIndex: 100001,
						useBodyOverflow: false,
						usePopupEasyClose: false,
						overlayColor: '#000000',
						overlayOpacity: 0.75,
						usePopupDefaultStyling: false,
						popupLoaderText: '',
						usePopupNav: true
					};

					if (skel.breakpoint('small').active) {

						p.usePopupCaption = false;
						p.usePopupCloser = false;
						p.windowMargin = 10;

					}
					else {

						p.usePopupCaption = true;
						p.usePopupCloser = true;
						p.windowMargin = 50;

					}

					$this.poptrox(p);

			});

	});

})(jQuery);