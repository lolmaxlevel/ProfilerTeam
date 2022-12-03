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


/*------------------
	Telegram WebApp
--------------------*/

let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

   tg.expand(); //расширяем на все окно  

   tg.MainButton.text = "Отправить"; //изменяем текст кнопки 
   tg.MainButton.textColor = "#fff"; //изменяем цвет текста кнопки
   tg.MainButton.color = "#ef4841"; //изменяем цвет бэкграунда кнопки
   
   if (tg.MainButton.isVisible){ //если кнопка показана 
	tg.MainButton.hide() //скрываем кнопку 
	}

   /*
   let usercard = document.getElementById("usercard"); //получаем блок usercard 

   let profName = document.createElement('p'); //создаем параграф
   profName.innerText = `${tg.initDataUnsafe.user.first_name}
   ${tg.initDataUnsafe.user.last_name}
   ${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;
   //выдем имя, "фамилию", через тире username и код языка
   usercard.appendChild(profName); //добавляем 

   let userid = document.createElement('p'); //создаем еще параграф 
   userid.innerText = `${tg.initDataUnsafe.user.id}`; //показываем user_id
   usercard.appendChild(userid); //добавляем
   */

/*------------------
		Quiz
--------------------*/

const quizData = [
    {
        question: "Вы пришли в гости, где собралось уже более 10 человек. Ваша реакция:",
        a: "Здорово! Обожаю шумные компании, можно повеселиться, завести новых знакомых.",
        b: "Я люблю бывать в компаниях, часто оказываюсь в центре внимания. Или удастся хорошенько  зажечь, или уж, на худой конец, с полезными людьми познакомлюсь.",
        c: "Надеюсь, что встречу здесь каких-нибудь знакомых, мне будет приятно с ними пообщаться.  Если все – незнакомые люди, то мне будет некомфортно.",
        d: "Я не очень люблю шумные компании и хожу на вечеринки, только чтобы завести или  поддержать полезные знакомства. Мне приятнее посидеть и поговорить с одним-двумя людьми в  покое и тишине.",
    },
    {
        question: "На этой же вечеринке вас попросили произнести тост. Ваша реакция:",
        a: "Я не люблю привлекать к себе внимание, ненавижу произносить тосты. Я не буду ни  соглашаться, ни отказываться, а просто как-нибудь увильну.",
        b: "Я хороший рассказчик и знаю пару прикольных тостов. Все будут в восторге.",
        c: "Я не боюсь произносить тосты, даже получаю от этого удовольствие, скажу что-нибудь умное  и по делу.",
        d: "Я, скорее всего, откажусь под убедительным предлогом. Но если мне надо произвести хорошее  впечатление для пользы дела, то могу и произнести уместный изящный тост.",
    },
    {
        question: "Ваш начальник дал вам и вашему сослуживцу задание, но не назначил ответственного за его  выполнение. Вы оба понадеялись друг на друга и забыли про задание. Сейчас ваш начальник  ругает вас за невыполнение задания. Ваша реакция:",
        a: "Негативные эмоции, которые никак не проявляются внешне. Я в состоянии контролировать  себя и буду осторожнее в работе с этими людьми в  будущем.",
        b: "Очень эмоциональная реакция, возможны слезы у девушки. Ну да, я – рассеянный и не очень  пунктуальный человек, но не я один (одна) виноват(а). Буду жаловаться на них всем друзьям и  знакомым.",
        c: "Обида на сослуживца и начальника. Я буду долго  переживать из-за этого, скорее всего, молча.",
        d: "Злость на начальника, потому что он безграмотный руководитель, и/или на сослуживца,  потому что он меня подставил. Всплеск агрессивных эмоций. Скорее всего, кому-нибудь из них  что-нибудь выскажу.",
    },
    {
        question: "Вам дали важное задание. Срок выполнения – через месяц, а выполнить его можно за две  недели. Ваша реакция:",
        a: "Лучше поскорее выполню задание и сдам его. И в глазах начальства буду хорошо выглядеть, и  у меня время для других дел будет.",
        b: "Сначала мне надо подумать, как лучше всего подойти к выполнению этой работы. Даже если  сделаю ее заранее, сразу сдавать не буду. Пусть отлежится, потом еще раз исправлю ошибки.  Может, сдам работу за день до срока.",
        c: "Сразу возьмусь за дело. Но, скорее всего, мне быстро надоест эта работа, и я увлекусь другим  заданием. Заброшу эту работу до тех пор, пока не наступит крайний срок. Потом срочно буду все  доделывать, может, даже опоздаю со сдачей.",
        d: "Хотелось бы начать делать сразу, но знаю, что так не получится. Всегда есть более срочные  или важные дела, все время что-то отвлекает. Скорее всего, буду выполнять задание до последней  минуты.",
    },
    {
        question: "Впереди длинные выходные. Вы решили куда-нибудь выбраться. Что вы выберете:",
        a: "Съездить в гости к родственникам или иначе провести день с семьей, супругой(м).",
        b: "Сходить в парк или на вечеринку с друзьями.",
        c: "Съездить на картинг или поиграть в футбол (карты) с друзьями.",
        d: "Сходить на концерт или выставку, можно в одиночку или с близким человеком.",
    },
	{
        question: "Если бы вы решили прыгать с парашютом, то по какой причине:",
        a: "Я познакомился с очень интересными людьми (человеком), которые занимаются парашютным  спортом. Они меня уговорили присоединиться.",
        b: "Мне необходимо через это пройти для достижения важной для меня цели.",
        c: " Я вообще люблю риск, адреналин. Хочу узнать, на что я способен.",
        d: "Меня считают тихоней. Я всегда в тени, отмалчиваюсь. Хочу доказать себе и другим, что я не  трус и не тряпка.",
    },
	{
        question: "Какие комментарии вы слышите чаще (как на работе, так и дома) в свой адрес:",
        a: "«А быстрее нельзя?» «Ты опять тянешь время!» «Сколько можно обсуждать одно и то же».",
        b: "«Пожалуйста, помедленнее» «Ты опять всех торопишь, мы никуда не опаздываем!» «Тебе уже  все ясно, а мне – еще нет. Давай не торопясь все обсудим».",
        c: "Выберите ответ выше",
        d: "Выберите ответ выше",
    },
	{
        question: "Вы узнали, что вас решили повысить по службе. Что вы сделаете прежде всего:",
        a: "Сообщите родным и близким о повышении, устроите уютный домашний праздник.",
        b: "Купите себе какую-нибудь дорогую вещь, чтобы в достойном виде прибыть на место работы в  первый день на новой должности (часы, костюм, машину).",
        c: "Поделитесь радостью с друзьями, закатите большую шумную вечеринку.",
        d: "Подождете радоваться, сорить деньгами и трезвонить о повышении, пока не начнете работать  на новом месте. Ведь еще даже приказ не подписан.",
    },
	{
        question: "У вас завтра экзамен. Ваше поведение:",
        a: "Лучше быстро повторить материал, чтобы осталось время на другие важные для вас дела.",
        b: "Лучше еще раз не спеша все повторить, пускай это даже займет всю ночь.",
        c: "Лучше хорошенько отоспаться перед экзаменом, чтобы прийти на него со свежей головой. К  экзамену вы готовились заранее.",
        d: "Перед смертью не надышишься. Лучше вообще не думать об экзамене, а пойти повеселиться.",
    },
	{
        question: "Как вы считаете, что является главным для победы, для достижения успеха:",
        a: "Личные усилия каждого. Каждый человек должен отвечать за себя, выкладываться по  максимуму, не прятаться за спинами других.",
        b: "Главное – командная работа, люди могут добиться чего-либо только вместе, помогая друг  другу, поддерживая друг друга.",
        c: "Выберите ответ выше",
        d: "Выберите ответ выше",
    },
	{
        question: "Если бы вы решили открыть свой бизнес (успех и одинаковая прибыльность гарантированы),  что бы вы выбрали (абстрагируйтесь от вашей профессии):",
        a: "Фирму финансового консалтинга или фирму по борьбе с вредными насекомыми.",
        b: "Охранную фирму или оружейный магазин.",
        c: "Ресторан или ночной клуб.",
        d: "Медицинский центр или бюро добрых услуг.",
    },
	{
        question: "У вас – новый просторный кабинет. Чем вы украсите его стены:",
        a: "Своими фото с известными людьми или яркими современными картинами.",
        b: "Фото супруга(и) и детей или групповыми фото ваших сослуживцев на корпоративе.",
        c: "Дипломами или нейтральными картинами.",
        d: "Портретом президента или старинной саблей.",
    },
	{
        question: "Что вы цените более всего в одежде?",
        a: "Одежда должна выглядеть дорого и круто.",
        b: "Одежда должна быть удобной.",
        c: "Одежда должна быть качественной и уместной, то есть соответствовать возрасту, фигуре и  ситуации, в которой ее одеваешь.",
        d: "Выберите ответ выше",
    },
	{
        question: "Вам надо выбрать соревнование, в котором вам комфортнее всего будет участвовать и где у  вас больше шансов на победу. Что вы выберете?",
        a: "Индивидуальные соревнования, где оценивается сообразительность, а не быстрота реакции  (шахматы, бильярд, покер).",
        b: "Индивидуальные соревнования на скорость и смелость (прыжки с парашютом, автогонки,  горные лыжи).",
        c: "Командные соревнования, лучше какие-нибудь необычные (футбол в грязи, всякие  корпоративные веселые старты).",
        d: "Командные соревнования, где требуется взаимная поддержка, взаимодействие всей команды  (соревнование университетов по созданию лучшего робота, керлинг).",
    },
	{
        question: "Вам надо выбрать гостиницу в Питере. Что вы выберете?",
        a: "Какую-нибудь приличную гостиницу в центре, чтобы не стыдно было.",
        b: "Какой-нибудь прикольный необычный мини-отель.",
        c: "Гостиницу, где раньше останавливался или которую порекомендуют знакомые.",
        d: "Гостиницу с идеальным соотношением цена/качество. Может быть, в старинном доме в  ретростиле.",
    },
];

var progress
document.addEventListener('DOMContentLoaded', function() {
	progress = document.getElementById('bar');
});
const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = "";

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
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

    if(answer && quizData[currentQuiz][answer] != "Выберите ответ выше") {
	
		score += `${answer} `;
		currentQuiz++;
		bar.value++

		if(currentQuiz < quizData.length){
			loadQuiz();
		}
		else{
			quiz.innerHTML = `<div class="quiz-header"><p align="center"><center><h2>Тест пройден!<br>Скорее отправляй результаты!</h2></p><img style="border-radius: 10px; display: block; margin-left: auto; margin-right: auto;" src="img/quiz/click.gif"></div>`;
			tg.MainButton.show() //показываем 
			Telegram.WebApp.onEvent('mainButtonClicked', function(){
				tg.sendData(`${score}`); 
				//при клике на основную кнопку отправляем данные в строковом виде
			});
		}
    }
});

