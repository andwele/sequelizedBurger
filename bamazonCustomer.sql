CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	id INT (55) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (255) NOT NULL,
    department_name VARCHAR (255) NOT NULL,
    price INT (55)  NOT NULL,
    stock_quantity INT (55) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Big Toe ", "shoes", "99", "10");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jerky", "food", "99", "5");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone 19", "Technology", "999", "1000");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toad Wars", "movies", "29", "30");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Get Git", "Books", "90", "23");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Beiber CD", "technology", "-9", "250");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("\fail", "books", "5", "54");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nomnoms", "food", "1", "340");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Acletus", "shoes", "8", "2");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Razr", "technology", "18", "578");
