Руководство по установке:

1) Скачать node js (https://nodejs.org/en/)
2) Установить на компьюер node js
3) Скачать MySQL-5.5 /MySQL Community Server 5.5/ (http://www.mysql.ru/download/)
4) Установить Mysql
----4.1) Подробный гайд по установке Mysql (http://www.mysql.ru/docs/man/Windows_prepare_environment.html)
5) (необязательно) Зайти в папку config и в файле database.js изменить порт (если изменили по умлочанию) и пароль
6) Запустить MYSQL сервер
7) Создать базу данных и дать ей название, и это название база данных надо указать в database.js
----7.1) Ввести в командной строке MySQL "Create database my_schema;"
----7.2) Ввести в командной строке MySQL запросы из файла database.txt 

Для установки как службы Windows:

8) в CMD -> рабочая дириктория проекта \ node install.js

Руководство по запуску: 

9) в cmd надо зайти в рабочую директорию проекта \ node server.js
10) запуск службы Windows: Пуск -> Панель управления -> Администрирование -> Службы
11) находим email client и нажимаем Запустить
12) Открываем браузе и указвыаем localhost:8080