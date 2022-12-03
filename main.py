from telebot import types
import telebot
from fpdf import FPDF

bot = telebot.TeleBot('5823049262:AAGvZ-AO_QPQPO3nzLdW-aNQZr0bJSpXZo0')


def webAppKeyboardInline(): #создание inline-клавиатуры с webapp кнопкой
   keyboard = types.InlineKeyboardMarkup(row_width=1) #создаем клавиатуру inline
   webApp = types.WebAppInfo("https://profiler-team.vercel.app/test.html") #создаем webappinfo - формат хранения url
   one = types.InlineKeyboardButton(text="Запустить тест №1", web_app=webApp) #создаем кнопку типа webapp
   keyboard.add(one) #добавляем кнопку в клавиатуру

   return keyboard #возвращаем клавиатуру

class PDF(FPDF):
   def header(self):
      self.image('img\\test1.png', x=0, y=0, w=210)
      self.add_font('Opel Sans', '', r"C:\\Users\\misha\\AppData\\Local\\Microsoft\\Windows\\Fonts\\Opel-Sans-Regular.ttf", uni=True)
      self.set_font("Opel Sans", size=32)
      self.ln(55)  # ниже на 85

   def footer(self):
      # Setting position at 1.5 cm from bottom:
      self.set_y(-10.5)
      # Setting font: helvetica italic 8
      self.add_font('Opel Sans', '', r"C:\\Users\\misha\\AppData\\Local\\Microsoft\\Windows\\Fonts\\Opel-Sans-Regular.ttf", uni=True)
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

   def chapter_body(self, txt):
      self.set_font("Opel Sans", size=12)
      # Printing justified text:
      self.multi_cell(0, 5, txt)
      # Performing a line break:
      self.ln()

   def print_chapter(self, num, utype, txt):
      self.add_page()
      self.chapter_title(num, utype)
      self.chapter_body(txt)

def pdf_report(uid, uinfo, uinfo2, uinfo3):
    utype = uinfo[0]
    utype2 = uinfo2[0]
    utype3 = uinfo3[0]
    pdf = PDF()
    pdf.add_page()
    pdf.add_font('Opel Sans', '', r"C:\\Users\\misha\\AppData\\Local\\Microsoft\\Windows\\Fonts\\Opel-Sans-Regular.ttf", uni=True)
    pdf.set_font("Opel Sans", size=52)
    pdf.ln(55)  # ниже на 85
    pdf.cell(200, 0, txt="ОТЧЁТ  ", ln=1, align="C")
    pdf.ln(15)
    pdf.set_font("Opel Sans", size=16)
    pdf.cell(200, 0, txt="ПО ПРОЙДЕННЫМ ТЕСТАМ      ", ln=1, align="C")
    pdf.print_chapter(1, utype, uinfo)
    pdf.print_chapter(2, utype2, uinfo2)
    pdf.print_chapter(3, utype2, uinfo3)
    pdf.output(f"{uid}.pdf")
    print(f"Pdf_report for user({uid}) created successful!")
    


@bot.message_handler(commands=['start']) #обрабатываем команду старт
def start_fun(message):
   bot.delete_message(message.chat.id, message.message_id)
   bot.send_message(message.chat.id, 'Привет, я бот ProfilerTeam!)\nЗапустить первый тест можно нажав на кнопку ниже.', parse_mode="Markdown", reply_markup=webAppKeyboardInline()) #отправляем сообщение с нужной клавиатурой


@bot.message_handler(content_types=['text', 'photo', 'video', 'document', 'audio', 'voice', 'sticker', 'location', 'contact'])
def error(message):
   try:
      bot.delete_message(message.chat.id, message.message_id)
   except:
      pass
   bot.send_message(message.chat.id, 'Воспользуйтесь предложенными кнопками. Если кнопки исчезли, введите команду /start')


@bot.message_handler(content_types="web_app_data") #получаем отправленные данные 
def answer(webAppMes):
   #print(webAppMes) #вся информация о сообщении
   print(webAppMes.web_app_data.data) #конкретно то что мы передали в бота
   """score = int(webAppMes.web_app_data.data.split()[0])
   quizlength = webAppMes.web_app_data.data.split()[1]
   stickers = {0 : "CAACAgIAAxkBAAEGpE5jiP7D4TC8e3OurfP5ptSMqr6ScQAC0BUAAsHN6Etz9xIa14yPYCsE",
               1 : "CAACAgIAAxkBAAEGpDpjiPnbhKLixKztr4hU1QABVo2kPi0AAg8YAAI3mOhLv0JPnsNwBNkrBA", 
               2 : "CAACAgIAAxkBAAEGpDxjiPnpZHUUP3M4F1eZA0dNqmloBgACNxMAAoGN8UuD-2DPuP7AoysE",
               3 : "CAACAgIAAxkBAAEGpD5jiPn3yrTrxbcVxr1TwvvxoziKUQACBRcAAsno6EsmvtEpe1IkcCsE",
               4 : "CAACAgIAAxkBAAEGpEBjiPn__Y6GPiXxo_0f0VHXw1kM5QACMhQAAj6r6EtdMwJVMBohFysE",
               5 : "CAACAgIAAxkBAAEGpEJjiPoI5dyY5C7JjKS9SN2zfv8UGQACgRAAAn-cEUhlrV6kjetHSisE"}
   bot.send_message(webAppMes.chat.id, f"Ты правильно ответил на {score} из {quizlength} вопросов!")
   bot.send_sticker(webAppMes.chat.id, stickers[score])"""
   #отправляем сообщение в ответ на отправку данных из веб-приложения 
   a = webAppMes.web_app_data.data.split()
   d = ["b", "c", "d", "a", "c", "c", "b", "b", "a", "a", "b", "d", "b", "b", "a"]
   dscore = 0
   i = ["a", "b", "b", "c", "b", "a", "b", "c", "d", "b", "c", "a", "a", "c", "b"]
   iscore = 0.
   s = ["c", "a", "c", "d", "a", "c", "a", "a", "b", "b", "d", "b", "c", "d", "c"]
   sscore = 0
   c = ["d", "d", "a", "b", "c", "b", "a", "d", "c", "a", "a", "c", "d", "a", "d"]
   cscore = 0
   for j in range(0, 15):
      if a[j] == d[j]:
         dscore+=1
      if a[j] == i[j]:
         iscore+=1
      if a[j] == s[j]:
         sscore+=1
      if a[j] == c[j]:
         cscore+=1
   if max(dscore, iscore, sscore, cscore) == dscore:
      pdf_report(webAppMes.chat.id, "D – лидеры, руководители, достаточно авторитарные люди, которые знают, чего хотят, и не очень привыкли прислушиваться к чужому мнению.")
   elif max(dscore, iscore, sscore, cscore) == iscore:
      pdf_report(webAppMes.chat.id, "I – люди, великолепно завязывающие новые знакомства, их профессия – это общение. Из них получаются великолепные специалисты по связям с общественностью, они везде свои, способны раствориться в любой компании.")
   elif max(dscore, iscore, sscore, cscore) == sscore:
      pdf_report(webAppMes.chat.id, "S – командные игроки. Вместе способны на все, но абсолютно не могут работать в одиночестве. Они управляемы, хорошие работники, однако практически не в состоянии самостоятельно что-то придумать или изобрести. Самым большим их плюсом является неспособность предать, на них можно положиться во всем.")
   elif max(dscore, iscore, sscore, cscore) == cscore:
      pdf_report(webAppMes.chat.id, "С – аналитики. Люди данного типа прекрасно работают с бумагами, из них получаются хорошие бухгалтеры, экономисты и юристы. Для них превыше всего – буква закона и инструкции.")
if __name__ == '__main__':
   bot.infinity_polling()