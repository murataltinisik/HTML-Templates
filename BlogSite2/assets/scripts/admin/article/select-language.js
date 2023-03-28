$(document).ready(function () {
	$('.article-container .content-detail').hide();
	$('.article-container .content-detail').first().show();
	$(`#software-languages div a`).first().addClass('bg-blue-700 text-white');
	$('#software-languages div a').click(function () {
		let languageIndex = $(this).index();

		$('#software-languages div a').removeClass('bg-blue-700  text-white');
		$(`#software-languages div a:eq(${languageIndex})`).addClass(
			'bg-blue-700 text-white'
		);
		$('.article-container .content-detail').stop().hide('fast');
		$(`.article-container .content-detail:eq(${languageIndex})`)
			.stop()
			.fadeIn('fast');
	});
});
