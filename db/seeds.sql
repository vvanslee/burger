use burgers_db;

CREATE TABLE burgers (
id INTEGER AUTO_INCREMENT,
burger_name VARCHAR(255) NOT NULL,
devoured BOOLEAN NOT NULL,
date TIMESTAMP NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured, date) VALUES ("Avocado", TRUE,"2016-04-29 09:12:36");
INSERT INTO burgers (burger_name, devoured, date) VALUES ("Bacon", TRUE,"2017-10-07 16:35:25");
INSERT INTO burgers (burger_name, devoured, date) VALUES ("Pizza", FALSE,"2012-01-28 11:55:21");