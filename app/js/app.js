import Swiper, { Navigation} from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
	
  const swiper = new Swiper('.swiper', {
    modules: [Navigation],
		navigation: {
			nextEl: '.swiper__button-next',
			prevEl: '.swiper__button-prev',
		},
		loop: true,
		slidesPerView: 1,
		breakpoints: {
			768: {
				slidesPerView: 1.2,
			},
			992: {
				slidesPerView: 1.4,
			},
			1200: {
				slidesPerView: 1.6,
			},
		},


  });

var questionTitles = document.querySelectorAll('.question__title');

// Добавляем обработчик клика на каждый заголовок
questionTitles.forEach(function(questionTitle) {
  questionTitle.addEventListener('click', function() {
    // Находим родительский элемент "question" и его дочерний элемент "question__content"
    var question = this.parentElement;
    var questionContent = question.querySelector('.question__content');

    // Проверяем, скрыт ли уже контент
    if (questionContent.style.display === 'none') {
      // Если скрыт, то показываем его
      questionContent.style.display = 'block';
    } else {
      // Если показан, то скрываем его
      questionContent.style.display = 'none';
    }
  });
});



})
