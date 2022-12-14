# -*- coding: utf-8 -*-

from telebot import types
import telebot
from fpdf import FPDF
import json
import datetime

bot = telebot.TeleBot('5823049262:AAGvZ-AO_QPQPO3nzLdW-aNQZr0bJSpXZo0')


def listener(messages):
   for m in messages:
      if m.content_type == 'text':
         print("––––––––––––––––––––––––––––––––––––––––––––––––––––––")
         print(f'{m.chat.username}[{m.chat.id}][{datetime.datetime.now().strftime("%d-%m-%Y_%H-%M")}]: {m.text}')
         with open('logs.txt', 'a', encoding = 'utf-8') as logs_file:
               logs_file.write("––––––––––––––––––––––––––––––––––––––––––––––––––––––\n")
               logs_file.write(f'{m.chat.username}[{m.chat.id}][{datetime.datetime.now().strftime("%d-%m-%Y_%H-%M")}]: {m.text}\n')
      elif m.content_type == 'web_app_data':
         print("––––––––––––––––––––––––––––––––––––––––––––––––––––––")
         print(f'{m.chat.username}[{m.chat.id}][{datetime.datetime.now().strftime("%d-%m-%Y_%H-%M")}]: {m.text}')
         with open('logs.txt', 'a', encoding = 'utf-8') as logs_file:
               logs_file.write("––––––––––––––––––––––––––––––––––––––––––––––––––––––\n")
               logs_file.write(f'{m.chat.username}[{m.chat.id}][{datetime.datetime.now().strftime("%d-%m-%Y_%H-%M")}]: {m.web_app_data}\n')


bot.set_update_listener(listener)



def webAppKeyboard1(): #создание клавиатуры с webapp кнопкой
   keyboard = types.ReplyKeyboardMarkup(row_width=1) #создаем клавиатуру
   webApp = types.WebAppInfo("https://profiler-team.vercel.app/test.html") #создаем webappinfo - формат хранения url
   one = types.KeyboardButton(text="Запустить тест №1", web_app=webApp) #создаем кнопку типа webapp
   keyboard.add(one) #добавляем кнопки в клавиатуру

   return keyboard #возвращаем клавиатуру


def webAppKeyboard2(): #создание клавиатуры с webapp кнопкой
   keyboard = types.ReplyKeyboardMarkup(row_width=1) #создаем клавиатуру
   webApp = types.WebAppInfo("https://profiler-team.vercel.app/test2.html") #создаем webappinfo - формат хранения url
   one = types.KeyboardButton(text="Запустить тест №2", web_app=webApp) #создаем кнопку типа webapp
   keyboard.add(one) #добавляем кнопки в клавиатуру

   return keyboard #возвращаем клавиатуру


def webAppKeyboard3(): #создание клавиатуры с webapp кнопкой
   keyboard = types.ReplyKeyboardMarkup(row_width=1) #создаем клавиатуру
   webApp = types.WebAppInfo("https://profiler-team.vercel.app/test3.html") #создаем webappinfo - формат хранения url
   one = types.KeyboardButton(text="Запустить тест №3", web_app=webApp) #создаем кнопку типа webapp
   keyboard.add(one) #добавляем кнопки в клавиатуру

   return keyboard #возвращаем клавиатуру


def buyKeyboard(): #создание клавиатуры с webapp кнопкой
   keyboard = types.ReplyKeyboardMarkup(row_width=1) #создаем клавиатуру
   webApp = types.WebAppInfo("https://profiler-team.vercel.app/buy.html") #создаем webappinfo - формат хранения url
   one = types.KeyboardButton(text="Купить полный отчёт", web_app=webApp) #создаем кнопку типа webapp
   keyboard.add(one) #добавляем кнопки в клавиатуру

   return keyboard #возвращаем клавиатуру


def loginKeyboard():
   keyboard = types.ReplyKeyboardMarkup(row_width=2, resize_keyboard=True)
   baza = types.KeyboardButton(text='Базовый отчёт')
   full = types.KeyboardButton(text='Полный отчёт')
   keyboard.add(baza, full)

   return keyboard

def adminKeyboard():
   keyboard = types.ReplyKeyboardMarkup(row_width=2, resize_keyboard=True)
   menu = types.KeyboardButton(text='Вернуться в меню')
   logs = types.KeyboardButton(text='Получить логи')
   keyboard.add(logs, menu)

   return keyboard


class PDF(FPDF):
   def header(self):
      self.image('img/test1.png', x=0, y=0, w=210)
      self.add_font('Opel Sans', '', r"/home/pi/.fonts/Opel-Sans-Regular.ttf", uni=True)
      self.set_font("Opel Sans", size=32)
      self.ln(48)  # ниже на 85

   def footer(self):
      # Setting position at 1.5 cm from bottom:
      self.set_y(-10.5)
      self.set_font("Opel Sans", size=10)
      self.set_text_color(255)
      # Printing page number
      self.cell(0, 10, f"Страница {self.page_no()}", align="C")

   def chapter_title(self, num, label):
      self.set_font("Opel Sans", size=16)
      # Setting background color
      self.set_fill_color(187)
      # Printing chapter name:
      self.cell(
         0,
         6,
         f"Результаты теста №{num}: {label}",
         align="L",
         fill=True,
      )
      # Performing a line break:
      self.ln(10)

   def chapter_body(self, num, txt):
      if num == 2:
         self.set_font("Opel Sans", size=14)
         self.multi_cell(0, 5, txt.split("!")[0])
         self.ln(3)
         self.set_font("Opel Sans", size=12)
         self.multi_cell(0, 5, txt.split("!")[1])
         self.ln()
      elif num == 3:
         self.set_font("Opel Sans", size=14)
         self.multi_cell(0, 5, txt.split("!")[0])
         self.ln(2)
         self.set_font("Opel Sans", size=12)
         self.multi_cell(0, 5, txt.split("!")[1])
         self.ln(6)
         self.set_font("Opel Sans", size=14)
         self.multi_cell(0, 5, txt.split("!")[2])
         self.ln(2)
         self.set_font("Opel Sans", size=12)
         self.multi_cell(0, 5, txt.split("!")[3])
      else:
         self.set_font("Opel Sans", size=12)
         # Printing justified text:
         self.multi_cell(0, 5, txt)
         # Performing a line break:
         self.ln()

   def chapter_vipbody(self, num, txt):
      if num == 1:
         txt = txt.split("!")
         for i in txt:
            self.set_font("Opel Sans", size=12)
            self.multi_cell(0, 5, i)
            self.ln(3)
      elif num == 2:
         self.set_font("Opel Sans", size=14)
         self.multi_cell(0, 5, txt.split("!")[0])
         self.ln(3)
         self.set_font("Opel Sans", size=12)
         self.multi_cell(0, 5, txt.split("!")[1])
         self.ln()
      elif num == 3:
         for i in txt:
            if i[0] == "-" and i[-1] == ".":
               self.set_font("Opel Sans", size=12)
               self.multi_cell(0, 5, i)
               self.ln(6)
            elif i[0] == "-":
               self.set_font("Opel Sans", size=12)
               self.multi_cell(0, 5, i)
               self.ln(2)
            elif i[-1] == ":":
               self.set_font("Opel Sans", size=14)
               self.multi_cell(0, 5, i)
               self.ln(4)
            else:
               self.set_font("Opel Sans", size=12)
               self.multi_cell(0, 5, i)
               self.ln(6)
      else:
         self.set_font("Opel Sans", size=12)
         # Printing justified text:
         self.multi_cell(0, 5, txt)
         # Performing a line break:
         self.ln()

   def print_chapter(self, num, utype, txt):
      self.chapter_title(num, utype)
      self.chapter_body(num, txt)

   def print_vipchapter(self, num, utype, txt):
      self.add_page()
      self.chapter_title(num, utype)
      self.chapter_vipbody(num, txt)

def pdf_report(uid, name, uinfo, uinfo2, uinfo3):
    utype = uinfo.split("|")[0]
    utype2 = uinfo2.split("|")[0]
    utype3 = uinfo3.split("|")[0]
    text = uinfo.split("|")[1]
    text2 = uinfo2.split("|")[1]
    text3 = uinfo3.split("|")[1]
    pdf = PDF()
    pdf.add_page()
    pdf.add_font('Opel Sans', '', r"/home/pi/.fonts/Opel-Sans-Regular.ttf", uni=True)
    pdf.set_font("Opel Sans", size=52)
    pdf.ln(55)  # ниже на 85
    pdf.cell(200, 0, txt="ОТЧЁТ  ", ln=1, align="C")
    pdf.ln(15)
    pdf.set_font("Opel Sans", size=16)
    pdf.cell(200, 0, txt="ПО ПРОЙДЕННЫМ ТЕСТАМ      ", ln=1, align="C")
    pdf.ln(10)
    pdf.set_font("Opel Sans", size=13)
    pdf.cell(200, 0, txt=f"Для пользователя {name}       ", ln=1, align="C")
    pdf.add_page()
    pdf.print_chapter(1, utype, text)
    pdf.print_chapter(2, utype2, text2)
    pdf.print_chapter(3, utype3, text3)
    pdf.output(f"reports/{uid}.pdf")
    print(f"Pdf_report for user({uid}) created successful!")

def pdf_vipreport(uid, name, uinfo, uinfo2, uinfo3):
    utype = uinfo.split("|")[0]
    utype2 = uinfo2.split("|")[0]
    utype3 = uinfo3.split("!")[0]
    text = uinfo.split("|")[1]
    text2 = uinfo2.split("|")[1]
    text3 = uinfo3.split("!")[1:]
    pdf = PDF()
    pdf.add_page()
    pdf.add_font('Opel Sans', '', r"/home/pi/.fonts/Opel-Sans-Regular.ttf", uni=True)
    pdf.set_font("Opel Sans", size=52)
    pdf.ln(55)  # ниже на 85
    pdf.cell(200, 0, txt="ОТЧЁТ  ", ln=1, align="C")
    pdf.ln(15)
    pdf.set_font("Opel Sans", size=20)
    pdf.cell(200, 0, txt="ПОЛНЫЙ     ", ln=1, align="C")
    pdf.ln(15)
    pdf.set_font("Opel Sans", size=16)
    pdf.cell(200, 0, txt="ПО ПРОЙДЕННЫМ ТЕСТАМ      ", ln=1, align="C")
    pdf.ln(10)
    pdf.set_font("Opel Sans", size=13)
    pdf.cell(200, 0, txt=f"Для пользователя {name}       ", ln=1, align="C")
    pdf.print_vipchapter(1, utype, text)
    pdf.print_vipchapter(2, utype2, text2)
    pdf.print_vipchapter(3, utype3, text3)
    pdf.output(f"vipreports/{uid}.pdf")
    print(f"Pdf_vipreport for user({uid}) created successful!")
    


@bot.message_handler(commands=['start']) #обрабатываем команду старт
def start(message):
   bot.delete_message(message.chat.id, message.message_id)

   with open('users.txt', 'r') as users_list: 
      users_data = users_list.read()
      if str(message.chat.id) == "452207570":
         bot.send_message(message.chat.id, 'Привет, admin! Выбери действие:', parse_mode="Markdown", reply_markup=adminKeyboard()) #отправляем сообщение с нужной клавиатурой
      elif str(message.chat.id) in users_data:
         bot.send_message(message.chat.id, f'Привет, {message.from_user.first_name}!\nВыбери действие:', reply_markup=loginKeyboard())
      else:
         bot.send_message(message.chat.id, 'Привет, я бот ProfilerTeam!)\nЗапустить тесты можно нажав на кнопку ниже.', parse_mode="Markdown", reply_markup=webAppKeyboard1()) #отправляем сообщение с нужной клавиатурой


@bot.message_handler(content_types=['photo', 'video', 'document', 'audio', 'voice', 'sticker', 'location', 'contact'])
def error(message):
    try:
        bot.delete_message(message.chat.id, message.message_id)
    except:
        pass
    bot.send_message(message.chat.id, 'Воспользуйтесь предложенными кнопками. Если кнопки исчезли, введите команду /start')


@bot.message_handler(content_types=['text'])
def handle_message_received(message):
   text = message.text
   try:
      bot.delete_message(message.chat.id, message.message_id)
   except:
      pass
   if text == 'Получить логи':
      with open("logs.txt", "rb") as file:
         bot.send_document(message.chat.id, document=file, reply_markup=loginKeyboard())
   elif text == 'Вернуться в меню':
      bot.send_message(message.chat.id, 'Привет, я бот ProfilerTeam!)\nЗапустить тесты можно нажав на кнопку ниже.', parse_mode="Markdown", reply_markup=webAppKeyboard1())
   elif text == 'Базовый отчёт':
      with open(f"reports/{message.chat.id}.pdf", "rb") as file:
         bot.send_document(message.chat.id, document=file, caption= f'Отчёт_{message.from_user.first_name}.pdf', reply_markup=loginKeyboard())
   elif text == 'Полный отчёт':
      if str(message.chat.id) == "452207570":
         bot.send_message(message.chat.id, 'Ты можешь приобрести развернутый отчет по твоим интересам всего за 299 рублей. Жми на кнопку "Купить полный отчёт"!', parse_mode="Markdown", reply_markup=buyKeyboard())
      else:
         with open('vips.txt', 'r') as users_list: 
            users_data = users_list.read()
            if str(message.chat.id) in users_data:
               with open(f"vipreports/{message.chat.id}.pdf", "rb") as file:
                  bot.send_document(message.chat.id, document=file, caption= f'Отчёт_{message.from_user.first_name}.pdf', reply_markup=loginKeyboard())
            else:
               bot.send_message(message.chat.id, 'Ты можешь приобрести развернутый отчет по твоим интересам всего за 299 рублей. Жми на кнопку "Купить полный отчёт"!', parse_mode="Markdown", reply_markup=buyKeyboard())

   else:
      bot.send_message(message.chat.id, 'Воспользуйтесь предложенными кнопками. Если кнопки исчезли, введите команду /start')


@bot.message_handler(content_types="web_app_data") #получаем отправленные данные 
def answer(webAppMes):
   bot.delete_message(webAppMes.chat.id, webAppMes.message_id)
   data = webAppMes.web_app_data.data.split()
   global res1, res2, res3

   if data[0] == "t1":
      d = ["b", "c", "d", "a", "c", "c", "b", "b", "a", "a", "b", "d", "b", "b", "a"]
      dscore = 0
      i = ["a", "b", "b", "c", "b", "a", "b", "c", "d", "b", "c", "a", "a", "c", "b"]
      iscore = 0.
      s = ["c", "a", "c", "d", "a", "c", "a", "a", "b", "b", "d", "b", "c", "d", "c"]
      sscore = 0
      c = ["d", "d", "a", "b", "c", "b", "a", "d", "c", "a", "a", "c", "d", "a", "d"]
      cscore = 0

      for j in range(1, 16):
         if data[j] == d[j-1]:
            dscore+=1
         if data[j] == i[j-1]:
            iscore+=1
         if data[j] == s[j-1]:
            sscore+=1
         if data[j] == c[j-1]:
            cscore+=1

      about_dict = {
         dscore: "Ваш психотип: D|D – лидеры, руководители, достаточно авторитарные люди, которые знают, чего хотят, и не очень привыкли прислушиваться к чужому мнению.",
         iscore: "Ваш психотип: I|I – люди, великолепно завязывающие новые знакомства, их профессия – это общение. Из них получаются великолепные специалисты по связям с общественностью, они везде свои, способны раствориться в любой компании.",
         sscore: "Ваш психотип: S|S – командные игроки. Вместе способны на все, но абсолютно не могут работать в одиночестве. Они управляемы, хорошие работники, однако практически не в состоянии самостоятельно что-то придумать или изобрести. Самым большим их плюсом является неспособность предать, на них можно положиться во всем.",
         cscore: "Ваш психотип: C|С – аналитики. Люди данного типа прекрасно работают с бумагами, из них получаются хорошие бухгалтеры, экономисты и юристы. Для них превыше всего – буква закона и инструкции."
         }

      res1 = about_dict[max(dscore, iscore, sscore, cscore)]

      bot.send_message(webAppMes.chat.id, 'Результаты первого теста получены!\nСкорее приступай к тесту №2!', reply_markup=webAppKeyboard2())
   elif data[0] == "t2":
      pr_c = (int(data[8])+int(data[14])+int(data[20])+int(data[26]))/4
      mene = (int(data[1])+int(data[15])+int(data[21])+int(data[27]))/4
      avto = (int(data[2])+int(data[9])+int(data[16])+int(data[22]))/4
      st_r = (int(data[3])+int(data[10]))/2
      st_m = (int(data[17])+int(data[32]))/2
      sluz = (int(data[4])+int(data[11])+int(data[18])+int(data[28]))/4
      vizv = (int(data[5])+int(data[12])+int(data[23])+int(data[29]))/4
      i_sz = (int(data[6])+int(data[13])+int(data[24])+int(data[30]))/4
      pred = (int(data[7])+int(data[19])+int(data[25])+int(data[31]))/4

      about_dict2 = {
         pr_c: "pr_cПрофессиональная компетентность|Ваша ценностная ориентация в карьере: Профессиональная компетентность!Быть профессионалом, мастером в своем деле. Эта ориентация связана с наличием способностей и талантов в определенной области. Люди с такой ориентацией хотят быть мастерами своего дела, они бывают особенно счастливы, когда достигают успеха в профессиональной сфере, но быстро теряют интерес к работе, которая не позволяет развивать их способности. Вряд ли их заинтересует даже значительно более высокая должность, если она не связана с их профессиональными компетенциями. Они ищут признания своих талантов, что должно выражаться в статусе, соответствующем их мастерству. Они готовы управлять другими в пределах своей компетенции, но управление не представляет для них особого интереса. Поэтому многие из этой категории отвергают работу руководителя, управление рассматривают как необходимое условие для продвижения в своей профессиональной сфере.",
         mene: "meneМенеджмент|Ваша ценностная ориентация в карьере: Менеджмент!Управлять – людьми, проектами, бизнес-процессами и т.п. Для этих людей первостепенное значение имеет ориентация личности на интеграцию усилий других людей, полнота ответственности за конечный результат и соединение различных функций организации. С возрастом и опытом эта карьерная ориентация проявляется сильнее. Возможности для лидерства, высокого дохода, повышенных уровней ответственности и вклад в успех своей организации являются ключевыми ценностями и мотивами. Самое главное для них – управление: людьми, проектами, любыми бизнес-процессами – это в целом не имеет принципиального значения. Центральное понятие их профессионального развития – власть, осознание того, что от них зависит принятие ключевых решений. Причем для них не является принципиальным управление собственным проектом или целым бизнесом, скорее наоборот, они в большей степени ориентированы на построение карьеры в наемном менеджменте, но при условии, что им будут делегированы значительные полномочия. Человек с такой ориентацией будет считать, что не достиг цели своей карьеры, пока не займет должность, на которой будет управлять различными сторонами деятельности предприятия.",
         avto: "avtoАвтономия (независимость)|Ваша ценностная ориентация в карьере: Автономия (независимость)!Главное в работе – это свобода и независимость. Первичная забота личности с такой ориентацией – освобождение от организационных правил, предписаний и ограничений. Они испытывают трудности, связанные с установленными правилами, процедурами, рабочим днем, дисциплиной, формой одежды и т.д. Они любят выполнять работу своим способом, темпом и по собственным стандартам. Они не любят, когда работа вмешивается в их частную жизнь, поэтому предпочитают делать независимую карьеру собственным путем. Они скорее выберут низкосортную работу, чем откажутся от автономии и независимости. Для них первоочередная задача развития карьеры – получить возможность работать самостоятельно, самому решать, как, когда и что делать для достижения тех или иных целей. Карьера для них – это, прежде всего, способ реализации их свободы, поэтому любые рамки и строгое подчинение оттолкнут их даже от внешне привлекательной вакансии. Такой человек может работать в организации, которая обеспечивает достаточную степень свободы.",
         st_r: "st_rСтабильность работы|Ваша ценностная ориентация в карьере: Стабильность работы!Стабильная, надежная работа на длительное время. Эти люди испытывают потребность в безопасности, защите и возможности прогнозирования и будут искать постоянную работу с минимальной вероятностью увольнения. Эти люди отождествляют свою работу со своей карьерой. Их потребность в безопасности и стабильности ограничивает выбор вариантов карьеры. Авантюрные или краткосрочные проекты и только становящиеся на ноги компании их, скорее всего, не привлекают. Они очень ценят социальные гарантии, которые может предложить работодатель, и, как правило, их выбор места работы связан именно с длительным контрактом и стабильным положением компании на рынке. Такие люди ответственность за управление своей карьерой перекладывают на нанимателя. Часто данная ценностная ориентация сочетается с невысоким уровнем притязаний.",
         st_m: "st_mСтабильность места жительства|Ваша ценностная ориентация в карьере: Стабильность места жительства!Главное – жить в своем городе (минимум переездов, командировок). Важнее остаться на одном месте жительства, чем получить повышение или новую работу на новой местности. Переезд для таких людей неприемлем, и даже частые командировки являются для них негативным фактором при рассмотрении предложения о работе.",
         sluz: "sluzСлужение|Ваша ценностная ориентация в карьере: Служение!Воплощать в работе свои идеалы и ценности. Данная ценностная ориентация характерна для людей, занимающихся делом по причине желания реализовать в своей работе главные ценности. Они часто ориентированы больше на ценности, чем на требующиеся в данном виде работы способности. Они стремятся приносить пользу людям, обществу, для них очень важно видеть конкретные плоды своей работы, даже если они и не выражены в материальном эквиваленте. Основной тезис построения их карьеры – получить возможность максимально эффективно использовать их таланты и опыт для реализации общественно важной цели. Люди, ориентированные на служение, общительны и часто консервативны. Человек с такой ориентацией не будет работать в организации, которая враждебна его целям и ценностям.",
         vizv: "vizvВызов|Ваша ценностная ориентация в карьере: Вызов!Сделать невозможное – возможным, решать уникальные задачи. Эти люди считают успехом преодоление непреодолимых препятствий, решение неразрешимых проблем или просто выигрыш. Они ориентированы на то, чтобы “бросать вызов”. Для одних людей вызов представляет более трудная работа, для других это — конкуренция и межличностные отношения. Они ориентированы на решение заведомо сложных задач, преодоление препятствий ради победы в конкурентной борьбе. Они чувствуют себя преуспевающими только тогда, когда постоянно вовлечены в решение трудных проблем или в ситуацию соревнования. Карьера для них – это постоянный вызов их профессионализму, и они всегда готовы его принять. Социальная ситуация чаще всего рассматривается с позиции “выигрыша – проигрыша”. Процесс борьбы и победа более важна для них, чем конкретная область деятельности или квалификация. Новизна,разнообразие и вызов имеют для них очень большую ценность, и, если все идет слишком просто, им становиться скучно.",
         i_sz: "i_szИнтеграция стилей жизни|Ваша ценностная ориентация в карьере: Интеграция стилей жизни!Сохранение гармонии между сложившейся личной жизнью и карьерой. Для людей этой категории карьера должна ассоциироваться с общим стилем жизни, уравновешивая потребности человека, семьи и карьеры. Они хотят, чтобы организационные отношения отражали бы уважение к их личным и семейным проблемам. Выбирать и поддерживать определенный образ жизни для них важнее, чем добиваться успеха в карьере. Развитие карьеры их привлекает только в том случае, если она не нарушает привычный им стиль жизни и окружение. Для них важно, чтобы все было уравновешено – карьера, семья, личные интересы и т.п. Жертвовать чем-то одним ради другого им явно не свойственно. Такие люди обычно в своем поведении проявляют конформность (тенденция изменять свое поведение в зависимости от влияния других людей, с тем, чтобы оно соответствовало мнению окружающих)",
         pred: "predПредпринимательство|Ваша ценностная ориентация в карьере: Предпринимательство!Создавать новые организации, товары, услуги. Этим людям нравится создавать новые организации, товары или услуги, которые могут быть отождествлены с их усилиями. Работать на других – это не их, они – предприниматели по духу, и цель их карьеры – создать что-то новое, организовать свое дело, воплотить в жизнь идею, всецело принадлежащую только им. Вершина карьеры в их понимании – собственный бизнес."
      }

      res2 = about_dict2[max(pr_c, mene, avto, st_r, st_m, sluz, vizv, i_sz, pred)]

      bot.send_message(webAppMes.chat.id, 'Результаты второго теста получены!\nСкорее приступай к тесту №3!', reply_markup=webAppKeyboard3())

   elif data[0] == 't3':
      r = {1: "a", 2: "a", 3: "a", 4: "a", 5: "a", 16: "a", 17: "a", 18: "a", 19: "a", 21: "a", 31: "a", 32: "a", 33: "a", 34: "a"}
      rscore = 0
      i = {1: "b", 6: "a", 7: "a", 8: "a", 9: "a", 16: "b", 20: "a", 22: "a", 23: "a", 24: "a", 31: "b", 35: "a", 36: "a", 37: "a"}
      iscore = 0.
      s = {2: "b", 6: "b", 10: "a", 11: "a", 12: "a", 17: "b", 29: "b", 25: "a", 26: "a", 27: "a", 36: "b", 38: "a", 39: "a", 41: "b"}
      sscore = 0
      k = {3: "b", 7: "b", 10: "b", 13: "a", 14: "a", 18: "b", 22: "b", 25: "b", 28: "a", 29: "a", 32: "b", 38: "b", 40: "a", 42: "a"}
      kscore = 0
      p = {4: "b", 8: "b", 11: "b", 13: "b", 15: "a", 23: "b", 28: "b", 30: "a", 33: "b", 35: "b", 37: "b", 39: "b", 40: "b"}
      pscore = 0
      a = {5: "b", 9: "b", 12: "b", 14: "b", 15: "b", 19: "b", 21: "b", 24: "a", 27: "b", 29: "b", 30: "b", 34: "b", 41: "a", 42: "b"}
      ascore = 0

      for j in range(1, 43):
         try:
            if data[j] == r[j]:
               rscore+=1
         except: pass
         try:
            if data[j] == i[j]:
               iscore+=1
         except: pass
         try:
            if data[j] == s[j]:
               sscore+=1
         except: pass
         try:
            if data[j] == k[j]:
               kscore+=1
         except: pass
         try:
            if data[j] == p[j]:
               pscore+=1
         except: pass
         try:
            if data[j] == a[j]:
               ascore+=1
         except: pass

      about_dict3 = {
         rscore: "RВаш тип личности: Реалистический|Психологические характеристики, особенности личности, способности:!Активность, агрессивность, деловитость, настойчивость, рациональность, практическое мышление, развитые двигательные навыки, пространственное воображение, технические способности!Ориентация, направленность, предпочтения:!Конкретный результат, настоящее, вещи, предметы и их практическое использование, занятия, требующие физического развития, ловкости, отсутствие ориентации на общение!Профессиональная среда:!Техника, сельское хозяйство, военное дело. Решение конкретных задач, требующих подвижности, двигательных умений, физической силы. Социальные навыки нужны в минимальной мере и связаны с приемом – передачей ограниченной информации.!Конкретные профессии:!Механик, электрик, инженер, фермер, зоотехник, агроном, садовод, автослесарь, шофер и т.д.",
         iscore: "IВаш тип личности: Интеллектуальный|Психологические характеристики, особенности личности, способности:!Аналитический ум, независимость и оригинальность суждений, гармоничное развитие языковых и математических способностей, критичность, любознательность, склонность к фантазии, интенсивная внутренняя жизнь, низкая физическая активность!Ориентация, направленность, предпочтения:!Идеи, теоретические ценности, умственный труд, решение интеллектуальных творческих задач, требующих абстрактного мышления, отсутствие ориентации на общение в деятельности, информационный характер общения!Профессиональная среда:!Наука. Решение задач, требующих абстрактного мышления и творческих способностей. Межличностные отношения играют незначительную роль, хотя необходимо уметь передавать и воспринимать сложные идеи!Конкретные профессии:!Физик, астроном, ботаник, программист и др.",
         sscore: "SВаш тип личности: Социальный|Психологические характеристики, особенности личности, способности:!Умение общаться, гуманность, способность к сопереживанию, активность, зависимость от окружающих и общественного мнения, приспособление, решение проблем с опорой на эмоции и чувства, преобладание языковых способностей!Ориентация, направленность, предпочтения:!Люди, общение, установление контактов с окружающими, стремление учить, воспитывать, избегание интеллектуальных проблем!Профессиональная среда:!Образование, здравоохранение, социальное обеспечение, обслуживание, спорт. Ситуации и проблемы, связанные с умением разбираться в поведении людей, требующие постоянного личного общения, умения убеждать.!Конкретные профессии:!Врач, педагог, психолог и т.п.",
         kscore: "KВаш тип личности: Конвенциальный|Психологические характеристики, особенности личности, способности:!Способности к переработке числовой информации, стереотипный подход к проблемам, консервативный характер, подчиняемость, зависимость, следование обычаям, конформность, исполнительность, преобладание математических способностей!Ориентация, направленность, предпочтения:!Порядок, четко расписанная деятельность, работа по инструкции, заданным алгоритмам, избегание неопределенных ситуаций, социальной активности и физического напряжения, принятие позиции руководства!Профессиональная среда:!Экономика, связь, расчеты, бухгалтерия, делопроизводство. Деятельность, требующая способностей к обработке рутинной информации и числовых данных!Конкретные профессии:!Бухгалтер, финансист, экономист, канцелярский служащий и др.",
         pscore: "PВаш тип личности: Предприимчивый|Психологические характеристики, особенности личности, способности:!Энергия, импульсивность, энтузиазм, предприимчивость, агрессивность, готовность к риску, оптимизм, уверенность в себе, преобладание языковых способностей, развитые организаторские способности!Ориентация, направленность, предпочтения:!Лидерство, признание, руководство, власть, личный статус, избегание занятий, требующих усидчивости, большого труда, двигательных навыков и концентрации внимания, интерес к экономике и политике!Профессиональная среда:!Решение неясных задач, общение с представителями различных типов в разнообразных ситуациях, требующих умения разбираться в мотивах поведения других людей и красноречия!Конкретные профессии:!Бизнесмен, маркетолог, менеджер, директор, заведующий, журналист, репортер, дипломат, юрист, политик и т.д.",
         ascore: "AВаш тип личности: Артистический|Психологические характеристики, особенности личности, способности:!Воображение и интуиция, эмоционально сложный взгляд на жизнь, независимость, гибкость и оригинальность мышления, развитые двигательные способности и восприятие!Ориентация, направленность, предпочтения:!Эмоции и чувства, самовыражение, творческие занятия, избегание деятельности, требующей физической силы, регламентированного рабочего времени, следования правилам и традициям!Профессиональная среда:!Изобразительное искусство, музыка, литература. Решение проблем, требующих художественного вкуса и воображения!Конкретные профессии:!Музыкант, художник, фотограф, актер, режиссер, дизайнер и т.д."
         }

      res3 = about_dict3[max(rscore, iscore, sscore, kscore, pscore, ascore)]

      bot.send_message(webAppMes.chat.id, "Поздравляю с успешным прохождением всех тестов!\nСейчас я обработаю твои результаты и пришлю отчёт в виде pdf файла. Это займет около 3 минут.", reply_markup=types.ReplyKeyboardRemove())
      with open('users.txt', 'r') as original: data = original.read()
      with open('users.txt', 'w') as modified: modified.write(data + f"\n{webAppMes.chat.id} {res1[16]} {res2[:4]} {res3[0]}")
      pdf_report(webAppMes.chat.id, webAppMes.from_user.first_name, res1, res2[4:], res3[1:])
      with open(f"reports/{webAppMes.chat.id}.pdf", "rb") as file:
         bot.send_document(webAppMes.chat.id, document=file, caption= f'Отчёт_{webAppMes.from_user.first_name}.pdf', reply_markup=loginKeyboard())
   elif data[0] == 'Done':
      if str(webAppMes.chat.id) != "452207570":
         with open('vips.txt', 'r') as original: data = original.read()
         with open('vips.txt', 'w') as modified: modified.write(data + f"\n{webAppMes.chat.id}")
      bot.send_message(webAppMes.chat.id, "Поздравляю с покупкой расширенного отчёта!\nСейчас я обработаю твои результаты и пришлю отчет в виде pdf файла. Это займет около 3 минут.", reply_markup=types.ReplyKeyboardRemove())
      with open("users.txt", "r") as users:
         user = users.read().splitlines()
      for i in user:
         if str(webAppMes.chat.id) in i:
            with open('texts_for_long.json', encoding="utf8") as json_file:
               data = json.load(json_file)
            res1 = data["about_dict1"][f"{i.split()[1]}"]
            res2 = data["about_dict2"][f"{i.split()[2]}"]
            res3 = data["about_dict3"][f"{i.split()[3]}"]
      pdf_vipreport(webAppMes.chat.id, webAppMes.from_user.first_name, res1, res2, res3)
      with open(f"vipreports/{webAppMes.chat.id}.pdf", "rb") as file:
         bot.send_document(webAppMes.chat.id, document=file, caption= f'Отчёт_{webAppMes.from_user.first_name}.pdf', reply_markup=loginKeyboard())


if __name__ == '__main__':
   bot.infinity_polling()