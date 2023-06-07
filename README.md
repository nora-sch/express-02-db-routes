mkdir express_db_02
cd express_db_02
touch app.js
npm init -y
npm install express
npm install nodemon --save-dev
npm i dotenv
npm i mysql2
npm run dev 

*package.json*
```js
"main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }, ...
```

mysql> create database user;
mysql> use user; 
mysql> create table users (id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, firstname VARCHAR(80) NOT NULL, lastname VARCHAR(80) NOT NULL, username VARCHAR(12) NULL, email VARCHAR(125) NOT NULL, age INT NOT NULL);
mysql> source ~/Documents/WILD/MySql/db-content-user.sql

*db-content-user.sql*
```sql
INSERT INTO `user`.`users` (`firstname`, `lastname`, `username`, `email`, `age`) VALUES ('Leanne', 'Graham', 'Bret', 'Sincere@april.biz', 45);
INSERT INTO `user`.`users` (`firstname`, `lastname`, `username`, `email`, `age`) VALUES ('Ervin', 'Howell', 'Antonette', 'Shanna@melissa.tv', 36);
INSERT INTO `user`.`users` (`firstname`, `lastname`, `username`, `email`, `age`) VALUES ('Clementine', 'Bauch', 'Samantha', 'Nathan@yesenia.net', 55);
INSERT INTO `user`.`users` (`firstname`, `lastname`, `username`, `email`, `age`) VALUES ('Patricia', 'Lebsack', 'Karianne', 'Julianne.OConner@kory.org', 42);
INSERT INTO `user`.`users` (`firstname`, `lastname`, `username`, `email`, `age`) VALUES ('Chelsey', 'Dietrich', 'Kamren', 'Lucio_Hettinger@annie.ca', 49);
INSERT INTO `user`.`users` (`firstname`, `lastname`, `username`, `email`, `age`) VALUES ('Dennis', 'Schulist', 'Leopoldo', 'Karley_Dach@jasper.info', 56);
INSERT INTO `user`.`users` (`firstname`, `lastname`, `username`, `email`, `age`) VALUES ('Kurtis', 'Weissnat', 'Elwyn', 'Telly.Hoeger@billy.biz', 32);
INSERT INTO `user`.`users` (`firstname`, `lastname`, `username`, `email`, `age`) VALUES ('Nicholas', 'Runolfsdottir V', 'Maxime', 'Sherwood@rosamond.me', 21);
INSERT INTO `user`.`users` (`firstname`, `lastname`, `username`, `email`, `age`) VALUES ('Glenna', 'Reichert', 'Delphine', 'Chaim_McDermott@dana.io', 78);
INSERT INTO `user`.`users` (`firstname`, `lastname`, `username`, `email`, `age`) VALUES ('Clementina', 'DuBuque', 'Moriah', 'Rey.Padberg@karina.biz', 62);
```