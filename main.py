from telebot import types
import telebot

bot = telebot.TeleBot('5823049262:AAGvZ-AO_QPQPO3nzLdW-aNQZr0bJSpXZo0')

def webAppKeyboard(): #создание клавиатуры с webapp кнопкой
   keyboard = types.ReplyKeyboardMarkup(row_width=1) #создаем клавиатуру
   webAppTest = types.WebAppInfo("https://profiler-team.vercel.app/test.html") #создаем webappinfo - формат хранения url
   one_butt = types.KeyboardButton(text="Запустить тест", web_app=webAppTest) #создаем кнопку типа webapp
   keyboard.add(one_butt) #добавляем кнопки в клавиатуру

   return keyboard #возвращаем клавиатуру

def webAppKeyboardInline(): #создание inline-клавиатуры с webapp кнопкой
   keyboard = types.InlineKeyboardMarkup(row_width=1) #создаем клавиатуру inline
   webApp = types.WebAppInfo("https://telegram.mihailgok.ru") #создаем webappinfo - формат хранения url
   one = types.InlineKeyboardButton(text="Веб приложение", web_app=webApp) #создаем кнопку типа webapp
   keyboard.add(one) #добавляем кнопку в клавиатуру

   return keyboard #возвращаем клавиатуру


@bot.message_handler(commands=['start']) #обрабатываем команду старт
def start_fun(message):
   bot.send_message(message.chat.id, 'Привет, я бот ProfilerTeam!)\nЗапустить тест можно нажав на кнопку ниже.', parse_mode="Markdown", reply_markup=webAppKeyboard()) #отправляем сообщение с нужной клавиатурой


@bot.message_handler(content_types="text")
def new_mes(message):
   bot.send_message(message.chat.id, 'Запустить тест можно нажав на кнопку ниже.', parse_mode="Markdown", reply_markup=webAppKeyboard()) #отправляем сообщение с нужной клавиатурой


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
      bot.send_message(webAppMes.chat.id, f"Твой психотип по результатам 1-го теста:\nD – лидеры, руководители, достаточно авторитарные люди, которые знают, чего хотят, и не очень привыкли прислушиваться к чужому мнению.")
   elif max(dscore, iscore, sscore, cscore) == iscore:
      bot.send_message(webAppMes.chat.id, f"Твой психотип по результатам 1-го теста:\nI – люди, великолепно завязывающие новые знакомства, их профессия – это общение. Из них получаются великолепные специалисты по связям с общественностью, они везде свои, способны раствориться в любой компании.")
   elif max(dscore, iscore, sscore, cscore) == sscore:
      bot.send_message(webAppMes.chat.id, f"Твой психотип по результатам 1-го теста:\nS – командные игроки. Вместе способны на все, но абсолютно не могут работать в одиночестве. Они управляемы, хорошие работники, однако практически не в состоянии самостоятельно что-то придумать или изобрести. Самым большим их плюсом является неспособность предать, на них можно положиться во всем.")
   elif max(dscore, iscore, sscore, cscore) == cscore:
      bot.send_message(webAppMes.chat.id, f"Твой психотип по результатам 1-го теста:\nС – аналитики. Люди данного типа прекрасно работают с бумагами, из них получаются хорошие бухгалтеры, экономисты и юристы. Для них превыше всего – буква закона и инструкции.")
if __name__ == '__main__':
   bot.infinity_polling()