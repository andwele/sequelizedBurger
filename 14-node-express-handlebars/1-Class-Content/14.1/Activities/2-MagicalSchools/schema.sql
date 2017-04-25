-- Created the DB "wizard_schools_db" (only works on local connections)
CREATE DATABASE wizard_schools_db;
USE wizard_schools_db;

-- Created the table "schools" 
CREATE TABLE schools (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  PRIMARY KEY(id)
);

-- Inserted a set of records into the table
INSERT INTO schools (name) VALUES ("Hogwarts School of Witchcraft");
INSERT INTO schools (name) VALUES ("Castelobruxo");
INSERT INTO schools (name) VALUES ("Durmstrang Institute");
INSERT INTO schools (name) VALUES ("Beauxbatons Academy of Magic");
