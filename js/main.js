/* =================================
------------------------------------
	WebUni - Education Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/


'use strict';


$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");


	/*------------------
		Gallery item
	--------------------*/
	if($('.course-items-area').length > 0 ) {
		var containerEl = document.querySelector('.course-items-area');
		var mixer = mixitup(containerEl);
	}

});

(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Realated courses
	--------------------*/
    $('.rc-slider').owlCarousel({
		autoplay:true,
		loop: true,
		nav:true,
		dots: false,
		margin: 30,
		navText: ['', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			990:{
				items:3
			},
			1200:{
				items:4
			}
		}
	});


    /*------------------
		Accordions
	--------------------*/
	$('.panel-link').on('click', function (e) {
		$('.panel-link').removeClass('active');
		var $this = $(this);
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});



	/*------------------
		Circle progress
	--------------------*/
	$('.circle-progress').each(function() {
		var cpvalue = $(this).data("cpvalue");
		var cpcolor = $(this).data("cpcolor");
		var cptitle = $(this).data("cptitle");
		var cpid 	= $(this).data("cpid");

		$(this).append('<div class="'+ cpid +'"></div><div class="progress-info"><h2>'+ cpvalue +'%</h2><p>'+ cptitle +'</p></div>');

		if (cpvalue < 100) {

			$('.' + cpid).circleProgress({
				value: '0.' + cpvalue,
				size: 176,
				thickness: 9,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		} else {
			$('.' + cpid).circleProgress({
				value: 1,
				size: 176,
				thickness: 9,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		}

	});

})(jQuery);

const quizData = [
    {
        question: "Какая страна раньше называлась Сиамом?",
        a: "Тибет",
        b: "Таиланд",
        c: "Непал",
        correct: "b",
    },
    {
        question: "Какой остров относится к Италии?",
        a: "Капри",
        b: "Корсика",
        c: "Родос",
        correct: "a",
    },
    {
        question: "Какая из крупных нелетающих птиц родом из Австралии?",
        a: "Киви",
        b: "Страус",
        c: "Эму",
        correct: "c",

    },
    {
        question: "Какой национальности человек, чьим родным языком является кантонский?",
        a: "Перуанец",
        b: "Китаец",
        c: "Японец",
        correct: "b",
    },
    {
        question: "Какие горы покрывают часть Италии, Франции и Швейцарии?",
        a: "Альпийские",
        b: "Иберийские",
        c: "Пиренейские",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
			if(score === 5){
				quiz.innerHTML = `<div class="quiz-header"><p><h2>Ты правильно ответил на ${score} из ${quizData.length} вопросов</h2></p><img style="border-radius: 10px;" src="img/quiz/five.gif"></div>
            <button class="quiz-btn" onclick="location.reload()">Перепройти тест</button>`;
			} else if(score == 4){
				quiz.innerHTML = `<div class="quiz-header"><p><h2>Ты правильно ответил на ${score} из ${quizData.length} вопросов</h2></p><img style="border-radius: 10px;" src="img/quiz/four.gif"></div>
            <button class="quiz-btn" onclick="location.reload()">Перепройти тест</button>`;
			} else if(score == 3){
				quiz.innerHTML = `<div class="quiz-header"><p><h2>Ты правильно ответил на ${score} из ${quizData.length} вопросов</h2></p><img style="border-radius: 10px;" src="img/quiz/three.gif"></div>
            <button class="quiz-btn" onclick="location.reload()">Перепройти тест</button>`;
			} else if(score == 2){
				quiz.innerHTML = `<div class="quiz-header"><p><h2>Ты правильно ответил на ${score} из ${quizData.length} вопросов</h2></p><img style="border-radius: 10px;" src="img/quiz/two.gif"></div>
            <button class="quiz-btn" onclick="location.reload()">Перепройти тест</button>`;
			} else if(score == 1){
				quiz.innerHTML = `<div class="quiz-header"><p><h2>Ты правильно ответил на ${score} из ${quizData.length} вопросов</h2></p><img style="border-radius: 10px;" src="img/quiz/one.gif"></div>
            <button class="quiz-btn" onclick="location.reload()">Перепройти тест</button>`;
			}
        }
    }
});

