$(document).ready(function () {
	// OPEN SUB MENU
	$('.right > li').click(function (e) {
		let rightMenuIndex = $(this).index();

		$(`.right > li .sub-menu`).stop().fadeOut();
		$(`.right > li .sub-menu:eq(${rightMenuIndex})`).stop().fadeIn();
	});

	// EXIT SUB MENU
	$(`.right > li .sub-menu`).mouseleave(function (e) {
		e.stopPropagation();
		e.target.tagName === 'UL' && $(`.right > li .sub-menu`).fadeOut();
	});
});
