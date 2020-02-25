function accord() {

	var questTitle = document.querySelectorAll('.question-title');
	var questContent = document.querySelectorAll('.question-descr');

	for (let index = 0; index < questContent.length; index++) {
		questContent[0].classList.add('is-open');
		questTitle[0].classList.add('open');
		document.querySelectorAll('.acord-img')[0].src = 'themes/adaptive_template_4/images/minus.png'
	}

	for (var i = 0; i < questTitle.length; i++) {
		questTitle[i].addEventListener('click', fun_open);


		function fun_open(event) {
			for (var i = 0; i < questTitle.length; i++) {
				questContent[i].classList.remove('is-open');
				questTitle[i].classList.remove('open');
				document.querySelectorAll('.acord-img')[i].src = 'themes/adaptive_template_4/images/plus.png'
				if (questTitle[i] == event.currentTarget) {
					questContent[i].classList.toggle('is-open');
					questTitle[i].classList.toggle('open');
					document.querySelectorAll('.acord-img')[i].src = 'themes/adaptive_template_4/images/minus.png'
				}
			}

		}



	}
}
accord();