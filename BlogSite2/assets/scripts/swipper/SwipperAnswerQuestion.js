$(function () {
	new Swiper('#questionAnswerContainer', {
		slidesPerView: 5,
		spaceBetween: 20,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true,
		},
		breakpoints: {
			280: {
				slidesPerView: 1.22,
				spaceBetween: 10,
			},
			520: {
				slidesPerView: 1.77,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 2.4,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
		},
	});
});
