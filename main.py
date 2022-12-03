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

if __name__ == '__main__':
   bot.infinity_polling()