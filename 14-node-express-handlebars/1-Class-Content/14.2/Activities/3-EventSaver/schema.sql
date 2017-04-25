/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Create the database event_saver_db and specified it for use.
CREATE DATABASE event_saver_db;
USE event_saver_db;

-- Create the table events.
CREATE TABLE events
(
id int NOT NULL AUTO_INCREMENT,
event varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO events (event) VALUES ('Today I drew a picture of my friends and I buying kale.');
INSERT INTO events (event) VALUES ('Shaan made a song.');
INSERT INTO events (event) VALUES ('Davon is rich. He is flipping houses.');
