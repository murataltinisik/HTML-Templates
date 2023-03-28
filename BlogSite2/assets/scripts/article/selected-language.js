$(document).ready(() => {
	// LANGUAGE
	let index;
	const languageComment = $('.content-container .content');
	const languages = $('#SingleArticleSectionContainer .nav li');

	languageComment.hide();
	languageComment.first().show();

	languages.click((e) => {
		index = e.target.getAttribute('aria-colindex');

		for (var i = 0; i <= languages.length - 1; i++) {
			languages[i].removeAttribute('class');
		}

		if (e.target.innerText === 'HTML') {
			e.target.setAttribute('class', 'active html-active');
		} else if (e.target.innerText === 'CSS') {
			e.target.setAttribute('class', 'active css-active');
		} else if (e.target.innerText === 'JS') {
			e.target.setAttribute('class', 'active js-active');
		} else if (e.target.innerText === 'SCSS') {
			e.target.setAttribute('class', 'active scss-active');
		} else if (e.target.innerText === 'LARAVEL') {
			e.target.setAttribute('class', 'active laravel-active');
		} else if (e.target.innerText === 'MYSQL') {
			e.target.setAttribute('class', 'active mysql-active');
		} else if (e.target.innerText === 'PYTHON') {
			e.target.setAttribute('class', 'active python-active');
		}

		languageComment.hide();
		languageComment.eq(index).fadeIn('slow');
	});
});
