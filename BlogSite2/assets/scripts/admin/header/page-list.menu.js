// PAGE LIST MENU
$(document).ready(function () {
	$('.page-list .page').click(function () {
		let pageIndex = $(this).index();

		// CLASS
		$('.page-list .page').removeClass('active');
		$(this).addClass('active');

		// SUBMENU
		$('.page-list .page .sub-menu').stop().slideUp();
		$(`.page-list .page:eq(${pageIndex}) .sub-menu`).stop().slideDown();
	});
});
