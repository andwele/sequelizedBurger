-- Creates the "additional_favorites_db" database --
CREATE DATABASE additional_favorites_db;

-- Makes it so all of the following code will affect additional_favorites_db --
USE additional_favorites_db;

-- Creates the table "favorite_foods" within additional_favorites_db --
CREATE TABLE favorite_foods (
  food VARCHAR(50) NOT NULL,
  score INTEGER(10)
);

CREATE TABLE favorite_songs (
  song VARCHAR(100) NOT NULL,
  score INTEGER(10)
);

CREATE TABLE favorite_movies (
  movie VARCHAR(100) NOT NULL,
  score INTEGER(10)
);

INSERT INTO favorite_foods (food, score)
VALUES ("Burger", 100);

INSERT INTO favorite_foods (food, score)
VALUES ("Fries", 90);

INSERT INTO favorite_songs (song, score)
VALUES ("Pinball Wizard", 100);

INSERT INTO favorite_songs (song, score)
VALUES ("Blinded Me With Science", 95);

INSERT INTO favorite_movies (movie, score)
VALUES ("The Matrix", 90);

INSERT INTO favorite_movies (movie, score)
VALUES ("Fellowship of the Ring", 95);

-- ONLY SHOWS THOSE VALUES THAT MATCH --
SELECT favorite_foods.food, favorite_songs.song
FROM favorite_foods
INNER JOIN favorite_songs
ON favorite_foods.score = favorite_songs.score
ORDER BY favorite_foods.food;

-- SHOWS ALL VALUES IN LEFT TABLE AND ONLY THE MATCHING ONES IN THE RIGHT TABLE --
SELECT favorite_songs.song,favorite_movies.movie
FROM favorite_songs
LEFT JOIN favorite_movies
ON favorite_songs.score = favorite_movies.score;

-- SHOWS ALL VALUES IN RIGHT TABLE AND ONLY THE MATCHING ONES IN THE LEFT TABLE --
SELECT favorite_songs.song,favorite_movies.movie
FROM favorite_songs
RIGHT JOIN favorite_movies
ON favorite_songs.score = favorite_movies.score;
