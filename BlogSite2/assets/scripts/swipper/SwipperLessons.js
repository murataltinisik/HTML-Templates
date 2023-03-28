$(function () {
	new Swiper('#lessons-container', {
		slidesPerView: 8,
		spaceBetween: 29,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true,
		},
		breakpoints: {
			280: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			520: {
				slidesPerView: 2.9,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 8,
				spaceBetween: 29,
			},
		},
	});
});
