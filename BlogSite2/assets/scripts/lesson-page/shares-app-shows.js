$(() => {
	let isOpenSharesAppIcons = false;
	let sharesAppDOM = $('.share-apps');
	sharesAppDOM.hide();

	$('#shares-app-show').click(() => {
		if (isOpenSharesAppIcons === false) {
			sharesAppDOM.hide();
			isOpenSharesAppIcons = true;
		} else {
			sharesAppDOM.show();
			isOpenSharesAppIcons = false;
		}
	});
});
