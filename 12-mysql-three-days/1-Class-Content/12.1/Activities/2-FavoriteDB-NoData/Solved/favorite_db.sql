-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;

-- Makes it so all of the following code will affect favorite_db --
USE favorite_db;

-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  -- Makes a string column called "food" which cannot contain null --
  food VARCHAR(50) NOT NULL,
  -- Makes an numeric column called "score" --
  score INTEGER(10)
);

CREATE TABLE favorite_songs (
  song VARCHAR(100) NOT NULL,
  artist VARCHAR(50),
  score INTEGER(10)
);

CREATE TABLE favorite_movies (
  -- Creates a numeric column called "id" which automatically increments and cannot be null --
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  movie VARCHAR(100) NOT NULL,
  -- Creates a boolean column called "five_times" that sets the default value to FALSE if nothing is entered --
  five_times BOOLEAN DEFAULT FALSE,
  score INTEGER(10),
  -- Sets the primary key of the table to id --
  PRIMARY KEY (id)
);
