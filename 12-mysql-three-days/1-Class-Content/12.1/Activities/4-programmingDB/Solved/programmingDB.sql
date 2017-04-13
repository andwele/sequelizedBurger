CREATE DATABASE programming_db;

USE programming_db;

CREATE TABLE programming_languages(
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  language VARCHAR(20),
  rating INTEGER(11),
  -- Creates a boolean column called "mastered" which will automatically fill --
  -- with TRUE when a new row is made and the value isn't otherwise defined. --
  mastered BOOLEAN DEFAULT TRUE,
  PRIMARY KEY (id)
);

-- Creates new rows 
INSERT INTO programming_languages (language, rating)
VALUES ("HTML", 95);

INSERT INTO programming_languages (language, rating)
VALUES ("JS", 99);

INSERT INTO programming_languages (language, rating)
VALUES ("JQuery", 98);

INSERT INTO programming_languages (language, rating)
VALUES ("MySQL", 70);
