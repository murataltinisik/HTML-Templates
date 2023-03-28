let page = '';

// VARIABLES
var searchList = document.getElementById('search-list');
var searchItem = document.getElementsByClassName('search-item');

// ADD EVENT LISTENER
searchList.addEventListener('keyup', function (e) {
	let value = e.target.value;

	for (let i = 0; i < searchItem.length; i++) {
		let text = '';

		if (page === 'users') {
			text = searchItem[i].childNodes[1].childNodes[1].childNodes[3].innerText;
		} else if (page === 'articles') {
			text =
				searchItem[i].childNodes[1].childNodes[1].childNodes[1].childNodes[1]
					.innerText;
		} else if (page === 'lessons') {
			text =
				searchItem[i].childNodes[1].childNodes[1].childNodes[1].childNodes[1]
					.innerText;
		} else if (page === 'question-answer') {
			text =
				searchItem[i].childNodes[1].childNodes[1].childNodes[1].childNodes[1]
					.innerText;
		} else if (page === 'messages') {
			text =
				searchItem[i].childNodes[1].childNodes[1].childNodes[1].childNodes[1]
					.innerText;
		} else if (page === 'settings') {
			text =
				searchItem[i].childNodes[1].childNodes[1].childNodes[1].childNodes[1]
					.innerText;
		}

		if (text.toLowerCase().indexOf(value.toLowerCase()) != -1) {
			searchItem[i].style.display = '';
		} else {
			searchItem[i].style.display = 'none';
		}
	}
});
