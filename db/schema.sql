DROP TABLE IF EXISTS coffee;
DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS coffee_books;

CREATE TABLE coffee (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200),
  description VARCHAR(300),
  category VARCHAR(50),
  phone VARCHAR(15),
  website VARCHAR(150),
  address_line_1 VARCHAR(100),
  address_line_2 VARCHAR(100),
  city VARCHAR(50),
  state VARCHAR(2),
  zip VARCHAR(5),
  lat FLOAT,
  long FLOAT,
  neighborhood VARCHAR(50),
  community VARCHAR(50)
);

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200),
  description VARCHAR(300),
  category VARCHAR(50),
  phone VARCHAR(15),
  website VARCHAR(150),
  address_line_1 VARCHAR(100),
  address_line_2 VARCHAR(100),
  city VARCHAR(50),
  state VARCHAR(2),
  zip VARCHAR(5),
  lat FLOAT,
  long FLOAT,
  neighborhood VARCHAR(50),
  community VARCHAR(50)
);

CREATE TABLE coffee_books (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200),
  description VARCHAR(300),
  category VARCHAR(50),
  phone VARCHAR(15),
  website VARCHAR(150),
  address_line_1 VARCHAR(100),
  address_line_2 VARCHAR(100),
  city VARCHAR(50),
  state VARCHAR(2),
  zip VARCHAR(5),
  lat FLOAT,
  long FLOAT,
  neighborhood VARCHAR(50),
  community VARCHAR(50)
);

COPY coffee
FROM '/Users/audreesteinberg/hr/capstone/mvp/app/db/data/Black-owned-coffee.csv'
DELIMITER ','
CSV HEADER;

COPY books
FROM '/Users/audreesteinberg/hr/capstone/mvp/app/db/data/Black-owned-books.csv'
DELIMITER ','
CSV HEADER;

COPY coffee_books
FROM '/Users/audreesteinberg/hr/capstone/mvp/app/db/data/Black-owned-books_coffee.csv'
DELIMITER ','
CSV HEADER;

CREATE SEQUENCE b_seq;
select setval('b_seq', (select max(id)+1 from books), false);
ALTER TABLE books ALTER COLUMN id SET DEFAULT nextval('b_seq');

CREATE SEQUENCE c_seq;
select setval('c_seq', (select max(id)+1 from coffee), false);
ALTER TABLE coffee ALTER COLUMN id SET DEFAULT nextval('c_seq');