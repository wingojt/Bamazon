DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(40) NOT NULL,
department_name VARCHAR(40) NOT NULL,
price DECIMAL (6,2) NOT NULL,
stock_quantity INT,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
values ('coffee filters', 'kitchen essentials', 12.00, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
values ('forks, stainless steel', 'kitchen essentials', 13.00, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
values ('screwdriver', 'garage essentials', 1.49, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
values ('lawnmower', 'lawn essentials', 199.00, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
values ('mini fridge', 'garage essentials', 179.00, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
values ('spoons, stainless steel', 'kitchen essentials', 13.50, 10);

SELECT * FROM products;