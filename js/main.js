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

   tg.MainButton.text = "Отправить результаты"; //изменяем текст кнопки 
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

var progress
document.addEventListener('DOMContentLoaded', function() {
	progress = document.getElementById('bar');
});

const quizData = [
    {
        question: "Вы пришли в гости, где собралось уже более 10 человек. Ваша реакция:",
        a: "Здорово! Обожаю шумные компании, можно повеселиться, завести новых знакомых.",
        b: "Я люблю бывать в компаниях, часто оказываюсь в центре внимания. Или удастся хорошенько зажечь, или уж, на худой конец, с полезными людьми познакомлюсь.",
        c: "Надеюсь, что встречу здесь каких-нибудь знакомых, мне будет приятно с ними пообщаться. Если все – незнакомые люди, то мне будет некомфортно.",
        d: "Я не очень люблю шумные компании и хожу на вечеринки, только чтобы завести или поддержать полезные знакомства. Мне приятнее посидеть и поговорить с одним-двумя людьми в покое и тишине.",
    },
    {
        question: "На этой же вечеринке вас попросили произнести тост. Ваша реакция:",
        a: "Я не люблю привлекать к себе внимание, ненавижу произносить тосты. Я не буду ни соглашаться, ни отказываться, а просто как-нибудь увильну.",
        b: "Я хороший рассказчик и знаю пару прикольных тостов. Все будут в восторге.",
        c: "Я не боюсь произносить тосты, даже получаю от этого удовольствие, скажу что-нибудь умное и по делу.",
        d: "Я, скорее всего, откажусь под убедительным предлогом. Но если мне надо произвести хорошее впечатление для пользы дела, то могу и произнести уместный изящный тост.",
    },
    {
        question: "Ваш начальник дал вам и вашему сослуживцу задание, но не назначил ответственного за его выполнение. Вы оба понадеялись друг на друга и забыли про задание. Сейчас ваш начальник ругает вас за невыполнение задания. Ваша реакция:",
        a: "Негативные эмоции, которые никак не проявляются внешне. Я в состоянии контролировать себя и буду осторожнее в работе с этими людьми в будущем.",
        b: "Очень эмоциональная реакция, возможны слезы у девушки. Ну да, я – рассеянный и не очень пунктуальный человек, но не я один (одна) виноват(а). Буду жаловаться на них всем друзьям и знакомым.",
        c: "Обида на сослуживца и начальника. Я буду долго переживать из-за этого, скорее всего, молча.",
        d: "Злость на начальника, потому что он безграмотный руководитель, и/или на сослуживца, потому что он меня подставил. Всплеск агрессивных эмоций. Скорее всего, кому-нибудь из них что-нибудь выскажу.",
    },
    {
        question: "Вам дали важное задание. Срок выполнения – через месяц, а выполнить его можно за две недели. Ваша реакция:",
        a: "Лучше поскорее выполню задание и сдам его. И в глазах начальства буду хорошо выглядеть, и у меня время для других дел будет.",
        b: "Сначала мне надо подумать, как лучше всего подойти к выполнению этой работы. Сразу сдавать не буду, потом еще раз исправлю ошибки. Может, сдам работу за день до срока.",
        c: "Сразу возьмусь за дело. Но, мне быстро надоест эта работа, и я увлекусь другим заданием. По наступлению крайнего строка срочно буду все доделывать, может, даже опоздаю со сдачей.",
        d: "Хотелось бы начать делать сразу, но знаю, что так не получится. Всегда есть более срочные или важные дела, все время что-то отвлекает. Скорее всего, буду выполнять задание до последней минуты.",
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
        a: "Я познакомился с очень интересными людьми (человеком), которые занимаются парашютным спортом. Они меня уговорили присоединиться.",
        b: "Мне необходимо через это пройти для достижения важной для меня цели.",
        c: " Я вообще люблю риск, адреналин. Хочу узнать, на что я способен.",
        d: "Меня считают тихоней. Я всегда в тени, отмалчиваюсь. Хочу доказать себе и другим, что я не трус и не тряпка.",
    },
	{
        question: "Какие комментарии вы слышите чаще (как на работе, так и дома) в свой адрес:",
        a: "«А быстрее нельзя?» «Ты опять тянешь время!» «Сколько можно обсуждать одно и то же».",
        b: "«Пожалуйста, помедленнее» «Ты опять всех торопишь, мы никуда не опаздываем!» «Тебе уже все ясно, а мне – еще нет. Давай не торопясь все обсудим».",
        c: "Выберите ответ выше",
        d: "Выберите ответ выше",
    },
	{
        question: "Вы узнали, что вас решили повысить по службе. Что вы сделаете прежде всего:",
        a: "Сообщите родным и близким о повышении, устроите уютный домашний праздник.",
        b: "Купите себе какую-нибудь дорогую вещь, чтобы в достойном виде прибыть на место работы в первый день на новой должности (часы, костюм, машину).",
        c: "Поделитесь радостью с друзьями, закатите большую шумную вечеринку.",
        d: "Подождете радоваться, сорить деньгами и трезвонить о повышении, пока не начнете работать на новом месте. Ведь еще даже приказ не подписан.",
    },
	{
        question: "У вас завтра экзамен. Ваше поведение:",
        a: "Лучше быстро повторить материал, чтобы осталось время на другие важные для вас дела.",
        b: "Лучше еще раз не спеша все повторить, пускай это даже займет всю ночь.",
        c: "Лучше хорошенько отоспаться перед экзаменом, чтобы прийти на него со свежей головой. К экзамену вы готовились заранее.",
        d: "Перед смертью не надышишься. Лучше вообще не думать об экзамене, а пойти повеселиться.",
    },
	{
        question: "Как вы считаете, что является главным для победы, для достижения успеха:",
        a: "Личные усилия каждого. Каждый человек должен отвечать за себя, выкладываться по максимуму, не прятаться за спинами других.",
        b: "Главное – командная работа, люди могут добиться чего-либо только вместе, помогая друг другу, поддерживая друг друга.",
        c: "Выберите ответ выше",
        d: "Выберите ответ выше",
    },
	{
        question: "Если бы вы решили открыть свой бизнес (успех и одинаковая прибыльность гарантированы), что бы вы выбрали (абстрагируйтесь от вашей профессии):",
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
        c: "Одежда должна быть качественной и уместной, то есть соответствовать возрасту, фигуре и ситуации, в которой ее одеваешь.",
        d: "Выберите ответ выше",
    },
	{
        question: "Вам надо выбрать соревнование, в котором вам комфортнее всего будет участвовать и где у вас больше шансов на победу. Что вы выберете?",
        a: "Индивидуальные соревнования, где оценивается сообразительность, а не быстрота реакции (шахматы, бильярд, покер).",
        b: "Индивидуальные соревнования на скорость и смелость (прыжки с парашютом, автогонки, горные лыжи).",
        c: "Командные соревнования, лучше какие-нибудь необычные (футбол в грязи, всякие корпоративные веселые старты).",
        d: "Командные соревнования, где требуется взаимная поддержка, взаимодействие всей команды (соревнование университетов по созданию лучшего робота, керлинг).",
    },
	{
        question: "Вам надо выбрать гостиницу в Питере. Что вы выберете?",
        a: "Какую-нибудь приличную гостиницу в центре, чтобы не стыдно было.",
        b: "Какой-нибудь прикольный необычный мини-отель.",
        c: "Гостиницу, где раньше останавливался или которую порекомендуют знакомые.",
        d: "Гостиницу с идеальным соотношением цена/качество. Может быть, в старинном доме в ретростиле.",
    }
];

const quizData2 = [
    {
        question: "Осуществлять наблюдение и контроль над людьми, влиять на них на всех уровнях. Насколько важным для Вас является данное утверждение? 1 – абсолютно не важно, 10 – исключительно важно"
    },
    {
        question: "Иметь возможность делать все по-своему и не быть стесненным правилами какой-либо организации. Насколько важным для Вас является данное утверждение? 1 – абсолютно не важно, 10 – исключительно важно"
    },
    {
        question: "Иметь постоянное место работы с гарантированным окладом и социальной защищенностью. Насколько важным для Вас является данное утверждение? 1 – абсолютно не важно, 10 – исключительно важно"
    },
    {
        question: "Употреблять свое умение общаться на пользу людям, помогать другим. Насколько важным для Вас является данное утверждение? 1 – абсолютно не важно, 10 – исключительно важно"
    },
    {
        question: "Работать над проблемами, которые представляются почти неразрешимыми. Насколько важным для Вас является данное утверждение? 1 – абсолютно не важно, 10 – исключительно важно"
    },
    {
        question: "Вести такой образ жизни, чтобы интересы семьи и карьеры взаимно уравновешивали друг друга и занимали одинаковое по времени место в моей жизни. Насколько важным для Вас является данное утверждение? 1 – абсолютно не важно, 10 – исключительно важно"
    },
    {
        question: "Создать и построить нечто, что будет всецело моим произведением или идеей. Насколько важным для Вас является данное утверждение? 1 – абсолютно не важно, 10 – исключительно важно"
    },
    {
        question: "Продолжать работу по своей специальности, чем получить более высокую должность, не связанную с моей специальностью. Насколько важным для Вас является данное утверждение? 1 – абсолютно не важно, 10 – исключительно важно"
    },
    {
        question: "Иметь работу, не связанную с режимом или другими организационными ограничениями. Насколько важным для Вас является данное утверждение? 1 – абсолютно не важно, 10 – исключительно важно"
    },
    {
        question: "Работать в организации, которая обеспечит мне стабильность на длительный период времени. Насколько важным для Вас является данное утверждение? 1 – абсолютно не важно, 10 – исключительно важно"
    },
    {
        question: "Употребить свои умения и способности на то, чтобы сделать мир лучше. Насколько важным для Вас является данное утверждение? 1 – абсолютно не важно, 10 – исключительно важно"
    },
    {
        question: "Соревноваться с другими и побеждать. Насколько важным для Вас является данное утверждение? 1 – абсолютно не важно, 10 – исключительно важно"
    },
    {
        question: "Строить карьеру, которая позволит мне не изменять своему образу жизни. Насколько важным для Вас является данное утверждение? 1 – абсолютно не важно, 10 – исключительно важно"
    },
    {
        question: "Посвятить всю жизнь избранной профессии. Насколько важным для Вас является данное утверждение? 1 – абсолютно не важно, 10 – исключительно важно"
    },
    {
        question: "Занять высокую руководящую должность. Насколько важным для Вас является данное утверждение? 1 – абсолютно не важно, 10 – исключительно важно"
    },
    {
        question: "Иметь работу, которая представляет максимум свободы и автономии в выборе характера занятий, времени выполнения и т.д. Насколько важным для Вас является данное утверждение? 1 – абсолютно не важно, 10 – исключительно важно"
    },
    {
        question: "Оставаться на одном месте жительства, чем переехать в связи с повышением. Насколько важным для Вас является данное утверждение? 1 – абсолютно не важно, 10 – исключительно важно"
    },
    {
        question: "Иметь возможность использовать свои умения и таланты для служения важной цели. Насколько важным для Вас является данное утверждение? 1 – абсолютно не важно, 10 – исключительно важно"
    },
    {
        question: "Я всегда нахожусь в поиске идей, которые дадут мне возможность начать и построить свое собственное дело. Насколько Вы согласны с данным утверждением? 1 – совершенно не согласен, 10 – полностью согласен"
    },
    {
        question: "Я соглашусь на руководящую должность только в том случае, если она находится в сфере моей профессиональной компетенции. Насколько Вы согласны с данным утверждением? 1 – совершенно не согласен, 10 – полностью согласен"
    },
    {
        question: "Я хотел бы достичь такого положения в организации, которое давало бы возможность наблюдать за работой других и интегрировать их деятельность. Насколько Вы согласны с данным утверждением? 1 – совершенно не согласен, 10 – полностью согласен"
    },
    {
        question: "В моей профессиональной деятельности я более всего заботился о своей свободе и автономии. Насколько Вы согласны с данным утверждением? 1 – совершенно не согласен, 10 – полностью согласен"
    },
    {
        question: "Соревнование и выигрыш – это наиболее важные и волнующие стороны моей карьеры. Насколько Вы согласны с данным утверждением? 1 – совершенно не согласен, 10 – полностью согласен"
    },
    {
        question: "Карьера имеет смысл только в том случае, если она позволяет вести жизнь, которая мне нравится. Насколько Вы согласны с данным утверждением? 1 – совершенно не согласен, 10 – полностью согласен"
    },
    {
        question: "Предпринимательская деятельность составляет центральную часть моей карьеры. Насколько Вы согласны с данным утверждением? 1 – совершенно не согласен, 10 – полностью согласен"
    },
    {
        question: "Я бы скорее ушел из организации, чем стал заниматься работой, не связанной с моей профессией. Насколько Вы согласны с данным утверждением? 1 – совершенно не согласен, 10 – полностью согласен"
    },
    {
        question: "Я буду считать, что достиг успеха в карьере только тогда, когда стану руководителем высокого уровня в солидной организации. Насколько Вы согласны с данным утверждением? 1 – совершенно не согласен, 10 – полностью согласен"
    },
    {
        question: "Я бы хотел посвятить свою карьеру достижению важной и полезной цели, а также помощи другим. Насколько Вы согласны с данным утверждением? 1 – совершенно не согласен, 10 – полностью согласен"
    },
    {
        question: "Я чувствую себя преуспевающим только тогда, когда я постоянно вовлечен в решение трудных проблем или в ситуацию соревнования. Насколько Вы согласны с данным утверждением? 1 – совершенно не согласен, 10 – полностью согласен"
    },
    {
        question: "Выбрать и поддерживать определенный образ жизни важнее, чем добиваться успеха в карьере. Насколько Вы согласны с данным утверждением? 1 – совершенно не согласен, 10 – полностью согласен"
    },
    {
        question: "Я всегда хотел основать и построить свой собственный бизнес. Насколько Вы согласны с данным утверждением? 1 – совершенно не согласен, 10 – полностью согласен"
    },
    {
        question: "Я предпочитаю работу, которая не связана с командировками. Насколько Вы согласны с данным утверждением? 1 – совершенно не согласен, 10 – полностью согласен"
    }
];

const quizData3 = [
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "инженер-техник",
        b: "инженер-контролер"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "вязальщик",
        b: "санитарный врач"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "повар",
        b: "наборщик"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "фотограф",
        b: "зав. магазином"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "чертежник",
        b: "дизайнер"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "философ",
        b: "психиатр"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "ученый-химик",
        b: "бухгалтер"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "редактор научного журнала",
        b: "адвокат"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "лингвист",
        b: "переводчик художественной литературы"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "педиатр",
        b: "статистик"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "организатор воспитательной работы",
        b: "председатель профсоюза"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "спортивный врач",
        b: "фельетонист"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "нотариус",
        b: "снабженец"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "перфоратор",
        b: "карикатурист"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "политический деятель",
        b: "писатель"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "садовник",
        b: "метеоролог"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "водитель",
        b: "медсестра"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "инженер-электрик",
        b: "секретарь-машинистка"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "маляр",
        b: "художник по металлу"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "биолог",
        b: "главный врач"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "телеоператор",
        b: "режиссер"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "гидролог",
        b: "ревизор"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "зоолог",
        b: "зоотехник"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "математик",
        b: "архитектор"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "работник ИДН",
        b: "счетовод"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "учитель",
        b: "милиционер"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "воспитатель",
        b: "художник по керамике"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "экономист",
        b: "заведующий отделом"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "корректор",
        b: "критик"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "завхоз",
        b: "директор"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "радиоинженер",
        b: "специалист по ядерной физике"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "водопроводчик",
        b: "наборщик"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "агроном",
        b: "председатель сельхозкооператива"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "закройщик-модельер",
        b: "декоратор"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "археолог",
        b: "эксперт "
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "работник музея",
        b: "консультант"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "ученый",
        b: "актер"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "логопед",
        b: "стенографист"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "врач",
        b: "дипломат"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "главный бухгалтер",
        b: "директор"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "поэт",
        b: "психолог"
    },
    {
        question: "Из каждой пары профессий нужно указать одну, предпочитаемую. Ваш выбор:",
        a: "архивариус",
        b: "скульптор"
    }
    
];

const quiz = document.getElementById('quiz');
const quiz2 = document.getElementById('quiz2');
const quiz3 = document.getElementById('quiz3');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = "t1 ";
let score2 = "t2 ";
let score3 = "t3 ";


var paramsString = document.location.href;
alert(paramsString)
if ("https://profiler-team.vercel.app/test.html" in paramsString) {
    loadQuiz();
} else if ("https://profiler-team.vercel.app/test2.html" in paramsString) {
    loadQuiz2();
} else if ("https://profiler-team.vercel.app/test3.html" in paramsString) {
    loadQuiz3();
}

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
}

function loadQuiz2(){
    var elem = document.querySelector('input[type="range"]');
    var rangeValue = function(){
        var newValue = elem.value;
        var target = document.querySelector('.value');
        target.innerHTML = newValue;
    }
    elem.addEventListener("input", rangeValue);

    const currentQuizData = quizData2[currentQuiz];

    questionElement.innerText = currentQuizData.question;
}

function loadQuiz3(){
    deselectAnswers();

    const currentQuizData = quizData3[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
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
    if (paramsString == "https://profiler-team.vercel.app/test.html") {
        const answer = getSelected();

        if(answer && quizData[currentQuiz][answer] != "Выберите ответ выше") {
	
            score += `${answer} `;
            currentQuiz++;
            bar.value++

            if(currentQuiz < quizData.length){
                loadQuiz();
            }
            else{
                quiz.innerHTML = `<div class="quiz-header"><p><center><h2>Тест №1 пройден!<br>Осталось ещё 2!</h2></p><img style="border-radius: 10px; display: block; margin-left: auto; margin-right: auto;" src="img/quiz/click.gif"></div>`;
                tg.MainButton.show() //показываем 
                Telegram.WebApp.onEvent('mainButtonClicked', function(){
                    tg.sendData(score); 
                    //при клике на основную кнопку отправляем данные в строковом виде
                });
            }
        }
    } else if (paramsString == "https://profiler-team.vercel.app/test2.html") {
        const answer = document.querySelector('input[type="range"]').value;
        if(answer != 0) {
            score2 += `${answer} `;
            currentQuiz++;
            bar.value++

            if(currentQuiz < quizData2.length){
                loadQuiz2();
            }
            else{
                quiz2.innerHTML = `<div class="quiz-header"><p><center><h2>Тест №2 пройден!<br>Осталося последний!</h2></p><img style="border-radius: 10px; display: block; margin-left: auto; margin-right: auto;" src="img/quiz/click.gif"></div>`;
                tg.MainButton.show() //показываем 
                Telegram.WebApp.onEvent('mainButtonClicked', function(){
                    tg.sendData(score2); 
                    //при клике на основную кнопку отправляем данные в строковом виде
                });
            }
        }
    } else if (paramsString == "https://profiler-team.vercel.app/test3.html") {
        const answer = getSelected();

        if(answer) {

            score += `${answer} `;
            currentQuiz++;
            bar.value++

            if(currentQuiz < quizData3.length){
                loadQuiz3();
            }
            else{
                quiz.innerHTML = `<div class="quiz-header"><p><center><h2>Тест №3 пройден!<br>Поздравлем, тестирование окончено!</h2></p><img style="border-radius: 10px; display: block; margin-left: auto; margin-right: auto;" src="img/quiz/click.gif"></div>`;
                tg.MainButton.show() //показываем 
                Telegram.WebApp.onEvent('mainButtonClicked', function(){
                    tg.sendData(score3); 
                    //при клике на основную кнопку отправляем данные в строковом виде
                });
            }
        }
    }
});