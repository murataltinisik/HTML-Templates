$(() => {
	const mainMenu = $('#responsive-menu .menu:eq(0)');
	$('#responsive-menu .open-icon').click(() => {
		mainMenu.css({
			width: '100%',
			padding: '1rem',
		});
	});

	$('#responsive-menu .close-icon').click(() => {
		mainMenu.css({
			width: '0',
			padding: '0',
		});
	});
});
