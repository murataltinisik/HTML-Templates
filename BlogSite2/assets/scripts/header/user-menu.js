$(() => {
	let isOpenUserMenu = false;
	const UserMenu = $('.right #open-user-menu');
	const UserMenuList = $('.right #open-user-menu .list').eq(0);

	UserMenu.click(() => {
		if (isOpenUserMenu === false) {
			UserMenu.addClass('active');
			UserMenuList.css('display', 'block');
			isOpenUserMenu = true;
		} else {
			UserMenu.removeClass('active');
			UserMenuList.css('display', 'none');
			isOpenUserMenu = false;
		}
	});
});
