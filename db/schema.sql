DROP DATABASE IF EXISTS burger;
CREATE DATABASE burger;
USE burger;

CREATE TABLE burger (
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);
