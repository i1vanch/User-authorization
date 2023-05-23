/*База данных: 'form';



Структура таблицы 'users'*/


CREATE TABLE users (
  id INT(11) PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255),
  password VARCHAR(255),
  photo VARCHAR(255),
  birthdate DATE
); 



/*Данные таблицы users*/

INSERT INTO users (username, password, photo, birthdate)
VALUES ('john', '123', '.img/john.png', '2000-01-01');

INSERT INTO users (username, password, photo, birthdate)
VALUES ('jane', '456', './img/jane.png', '1995-03-15');

INSERT INTO users (username, password, photo, birthdate)
VALUES ('alex', '789', './img/alex.png', '1988-09-22');







