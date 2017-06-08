CREATE DATABASE bamazon;

CREATE TABLE products ( 
	item_id INT (55) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (255) NOT NULL,
    department_name VARCHAR (255) NOT NULL,
    price INT (55),
    stock_quantity INT (55),
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blender", "Appliances", "49", "90");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Beats by Tre", "Electronics", "199", "200");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Thesaurus", "Books", "9", "1000");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blender", "Appliances", "49", "90");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blender", "Appliances", "49", "90");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blender", "Appliances", "49", "90");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blender", "Appliances", "49", "90");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blender", "Appliances", "49", "90");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blender", "Appliances", "49", "90");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blender", "Appliances", "49", "90");