DROP DATABASE IF EXISTS ball;
CREATE DATABASE ball;
/*
mysql -u root < database/schema.sql
*/
USE ball;
CREATE TABLE tennis (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  item_name VARCHAR(255) NOT NULL,
  amount INT NOT NULL
);