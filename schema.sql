CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE songs (
rank INT NOT NULL,
artist VARCHAR(100) NOT NULL, 
song VARCHAR(100) NOT NULL,
year INT (100) NOT NULL,
raw_total DECIMAL (10,4) NULL,
raw_usa DECIMAL (10,4) NULL,
raw_uk DECIMAL (10,4) NULL,
raw_eu DECIMAL (10,4) NULL,
raw_row DECIMAL (10,4) NULL,
PRIMARY KEY (rank)
);

SELECT * FROM songs;




CREATE TABLE albums (
    rank INT NOT NULL,
    artist VARCHAR(100) NOT NULL,
    year INT NOT NULL,
    name VARCHAR (100) NOT NULL,
    PRIMARY KEY (rank)
);

SELECT year, artist
FROM songs;

INTERSECT

SELECT year, artist
FROM albums;

