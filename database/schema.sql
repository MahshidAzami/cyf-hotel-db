CREATE TABLE IF NOT EXISTS customers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT(16),
  firstname TEXT(64) NOT NULL,
  surname TEXT (64) NOT NULL,
  email TEXT (64)
);


INSERT INTO customers 
(title, firstname, surname, email)
VALUES 
('Mr','John', 'Dove', 'john.doe@domain.com');
INSERT INTO customers
  (title, firstname, surname, email)
VALUES
  ("Ms." , "Jacey" , "Maggio" , "Hilda_Funk85@hotmail.com");
INSERT INTO customers
  (title, firstname, surname, email)
VALUES
  ("Ms." , "Carrie" , "Schuster" , "Alexys.Kozey92@hotmail.com");
INSERT INTO customers
  (title, firstname, surname, email)
VALUES
  ("Dr." , "Newton" , "Satterfield" , "Precious.Balistreri28@hotmail.com");
INSERT INTO customers
  (title, firstname, surname, email)
VALUES
  ("Mr." , "Trinity" , "Wisozk" , "Maida62@gmail.com");
INSERT INTO customers
  (title, firstname, surname, email)
VALUES
  ("Mrs." , "Bertrand" , "Marvin" , "Maybelle_Wyman@yahoo.com");
INSERT INTO customers
  (title, firstname, surname, email)
VALUES
  ("Ms." , "Uriel" , "Nader" , "Zaria.Bashirian4@yahoo.com");
INSERT INTO customers
  (title, firstname, surname, email)
VALUES
  ("Ms." , "Sadie" , "Koelpin" , "Guillermo_Kulas@gmail.com");
INSERT INTO customers
  (title, firstname, surname, email)
VALUES
  ("Miss" , "Foster" , "Keebler" , "Fern63@hotmail.com");
INSERT INTO customers
  (title, firstname, surname, email)
VALUES
  ("Ms." , "Carrie" , "Quigley" , "Eliezer_Wiza13@hotmail.com");
INSERT INTO customers
  (title, firstname, surname, email)
VALUES
  ("Mrs." , "Jennyfer" , "Bergnaum" , "Izaiah25@gmail.com");
INSERT INTO customers
  (title, firstname, surname, email)
VALUES
  ("Dr." , "Reynold" , "Beier" , "Myra12@gmail.com");
INSERT INTO customers
  (title, firstname, surname, email)
VALUES
  ("Ms." , "Fidel" , "Heathcote" , "Frederick.Treutel73@gmail.com");
INSERT INTO customers
  (title, firstname, surname, email)
VALUES
  ("Mr." , "Wallace" , "Crist" , "Lizzie.Weimann77@yahoo.com");
INSERT INTO customers
  (title, firstname, surname, email)
VALUES
  ("Miss" , "Everardo" , "Vandervort" , "Nolan.Wehner@gmail.com");
INSERT INTO customers
  (title, firstname, surname, email)
VALUES
  ("Miss" , "Chance" , "Hettinger" , "Shane.Rath49@yahoo.com");
INSERT INTO customers
  (title, firstname, surname, email)
VALUES
  ("Miss" , "Stuart" , "Herzog" , "Nayeli_Ullrich@yahoo.com");
INSERT INTO customers
  (title, firstname, surname, email)
VALUES
  ("Mrs." , "Carolyne" , "Smith" , "Danyka.Sipes68@gmail.com");
INSERT INTO customers
  (title, firstname, surname, email)
VALUES
  ("Ms." , "Joanne" , "Romaguera" , "Lowell60@gmail.com");
INSERT INTO customers
  (title, firstname, surname, email)
VALUES
  ("Mr." , "Abigail" , "Goldner" , "Harley.Shields2@hotmail.com");
INSERT INTO customers
  (title, firstname, surname, email)
VALUES
  ("Miss" , "Annabelle" , "Zulauf" , "Brooke.Paucek32@hotmail.com");

create table invoices (
ID integer primary key AUTOINCREMENT,
reservation_id integer not null,
total number,
surcharges number,
invoice_date_time datetime not null,
paid boolean default 0,
foreign key(reservation_id) references reservations(id)
);

INSERT INTO invoices
  (reservation_id, total, surcharges, invoice_date_time, paid)
VALUES
  (4, 40.00, 93.00, "2017-06-24", false);
INSERT INTO invoices
  (reservation_id, total, surcharges, invoice_date_time, paid)
VALUES
  (9, 113.00, 43.00, "2017-06-07", true);
INSERT INTO invoices
  (reservation_id, total, surcharges, invoice_date_time, paid)
VALUES
  (11, 100.00, 85.00, "2017-09-19", false);
INSERT INTO invoices
  (reservation_id, total, surcharges, invoice_date_time, paid)
VALUES
  (3, 146.00, 90.00, "2017-12-16", false);
INSERT INTO invoices
  (reservation_id, total, surcharges, invoice_date_time, paid)
VALUES
  (15, 189.00, 92.00, "2017-08-30", true);
INSERT INTO invoices
  (reservation_id, total, surcharges, invoice_date_time, paid)
VALUES
  (3, 169.00, 70.00, "2017-06-24", true);
INSERT INTO invoices
  (reservation_id, total, surcharges, invoice_date_time, paid)
VALUES
  (17, 70.00, 56.00, "2017-05-01", false);
INSERT INTO invoices
  (reservation_id, total, surcharges, invoice_date_time, paid)
VALUES
  (3, 176.00, 19.00, "2017-10-27", false);
INSERT INTO invoices
  (reservation_id, total, surcharges, invoice_date_time, paid)
VALUES
  (20, 70.00, 76.00, "2018-01-17", true);
INSERT INTO invoices
  (reservation_id, total, surcharges, invoice_date_time, paid)
VALUES
  (11, 60.00, 81.00, "2017-05-28", true);
INSERT INTO invoices
  (reservation_id, total, surcharges, invoice_date_time, paid)
VALUES
  (1, 184.00, 89.00, "2017-11-01", true);
INSERT INTO invoices
  (reservation_id, total, surcharges, invoice_date_time, paid)
VALUES
  (11, 87.00, 35.00, "2017-12-15", false);
INSERT INTO invoices
  (reservation_id, total, surcharges, invoice_date_time, paid)
VALUES
  (16, 27.00, 5.00, "2017-04-04", true);
INSERT INTO invoices
  (reservation_id, total, surcharges, invoice_date_time, paid)
VALUES
  (11, 62.00, 16.00, "2017-12-26", true);
INSERT INTO invoices
  (reservation_id, total, surcharges, invoice_date_time, paid)
VALUES
  (18, 111.00, 21.00, "2017-07-05", false);
INSERT INTO invoices
  (reservation_id, total, surcharges, invoice_date_time, paid)
VALUES
  (14, 78.00, 94.00, "2017-04-09", false);
INSERT INTO invoices
  (reservation_id, total, surcharges, invoice_date_time, paid)
VALUES
  (15, 168.00, 96.00, "2017-03-29", false);
INSERT INTO invoices
  (reservation_id, total, surcharges, invoice_date_time, paid)
VALUES
  (9, 98.00, 98.00, "2017-05-09", true);
INSERT INTO invoices
  (reservation_id, total, surcharges, invoice_date_time, paid)
VALUES
  (16, 113.00, 34.00, "2017-04-09", false);
INSERT INTO invoices
  (reservation_id, total, surcharges, invoice_date_time, paid)
VALUES
  (15, 117.00, 29.00, "2017-06-30", false);

create table reservations (
id integer primary key AUTOINCREMENT,
customer_id integer not null,
room_id integer not null,
check_in_date datetime not null,
check_out_date datetime,
room_price number,
foreign key(customer_id) references customers(id),
foreign key(room_id) references rooms(id)
);

INSERT INTO reservations
  (customer_id, room_id, check_in_date, check_out_date, room_price)
VALUES
  (21, 2, "2019-01-20", "2019-01-02", 103.00);
INSERT INTO reservations
  (customer_id, room_id, check_in_date, check_out_date, room_price)
VALUES
  (2, 9, "2018-09-24", "2018-08-27", 51.00);
INSERT INTO reservations
  (customer_id, room_id, check_in_date, check_out_date, room_price)
VALUES
  (3, 3, "2018-02-15", "2018-11-09", 175.00);
INSERT INTO reservations
  (customer_id, room_id, check_in_date, check_out_date, room_price)
VALUES
  (16, 9, "2018-01-29", "2018-06-15", 84.00);
INSERT INTO reservations
  (customer_id, room_id, check_in_date, check_out_date, room_price)
VALUES
  (19, 1, "2018-10-13", "2018-06-22", 169.00);
INSERT INTO reservations
  (customer_id, room_id, check_in_date, check_out_date, room_price)
VALUES
  (4, 6, "2019-01-06", "2018-04-08", 59.00);
INSERT INTO reservations
  (customer_id, room_id, check_in_date, check_out_date, room_price)
VALUES
  (5, 10, "2018-12-16", "2018-09-29", 182.00);
INSERT INTO reservations
  (customer_id, room_id, check_in_date, check_out_date, room_price)
VALUES
  (21, 2, "2018-12-30", "2018-02-17", 184.00);
INSERT INTO reservations
  (customer_id, room_id, check_in_date, check_out_date, room_price)
VALUES
  (11, 3, "2018-11-03", "2018-04-01", 185.00);
INSERT INTO reservations
  (customer_id, room_id, check_in_date, check_out_date, room_price)
VALUES
  (17, 8, "2018-10-25", "2018-09-02", 167.00);
INSERT INTO reservations
  (customer_id, room_id, check_in_date, check_out_date, room_price)
VALUES
  (2, 7, "2018-09-28", "2018-02-10", 68.00);
INSERT INTO reservations
  (customer_id, room_id, check_in_date, check_out_date, room_price)
VALUES
  (16, 7, "2018-06-05", "2018-07-23", 138.00);
INSERT INTO reservations
  (customer_id, room_id, check_in_date, check_out_date, room_price)
VALUES
  (5, 5, "2018-11-16", "2018-07-13", 58.00);
INSERT INTO reservations
  (customer_id, room_id, check_in_date, check_out_date, room_price)
VALUES
  (4, 9, "2018-07-20", "2018-11-24", 76.00);
INSERT INTO reservations
  (customer_id, room_id, check_in_date, check_out_date, room_price)
VALUES
  (14, 5, "2018-04-22", "2018-08-07", 124.00);
INSERT INTO reservations
  (customer_id, room_id, check_in_date, check_out_date, room_price)
VALUES
  (4, 8, "2018-01-26", "2018-02-01", 167.00);
INSERT INTO reservations
  (customer_id, room_id, check_in_date, check_out_date, room_price)
VALUES
  (13, 1, "2018-02-28", "2018-08-15", 50.00);
INSERT INTO reservations
  (customer_id, room_id, check_in_date, check_out_date, room_price)
VALUES
  (18, 2, "2018-08-31", "2018-04-28", 54.00);
INSERT INTO reservations
  (customer_id, room_id, check_in_date, check_out_date, room_price)
VALUES
  (6, 6, "2018-12-31", "2018-12-07", 105.00);
INSERT INTO reservations
  (customer_id, room_id, check_in_date, check_out_date, room_price)
VALUES
  (11, 4, "2018-10-25", "2019-01-06", 45.00);

create table rooms (
  id integer primary key AUTOINCREMENT,
  room_type_id integer not null,
  sea_view boolean,
  foreign key (room_type_id) references room_types(id)
) ;

INSERT INTO rooms
  (room_type_id, sea_view)
VALUES
  (4, 1);
INSERT INTO rooms
  (room_type_id, sea_view)
VALUES
  (1, 0);
INSERT INTO rooms
  (room_type_id, sea_view)
VALUES
  (3, 1);
INSERT INTO rooms
  (room_type_id, sea_view)
VALUES
  (2, 1);
INSERT INTO rooms
  (room_type_id, sea_view)
VALUES
  (1, 0);
INSERT INTO rooms
  (room_type_id, sea_view)
VALUES
  (1, 1);
INSERT INTO rooms
  (room_type_id, sea_view)
VALUES
  (2, 1);
INSERT INTO rooms
  (room_type_id, sea_view)
VALUES
  (4, 1);
INSERT INTO rooms
  (room_type_id, sea_view)
VALUES
  (2, 1);
INSERT INTO rooms
  (room_type_id, sea_view)
VALUES
  (4, 1);

create table room_types (
  id integer primary key AUTOINCREMENT,
  type_name TEXT,
  original_price number,
  current_price number
);

INSERT INTO room_types
  (type_name, original_price, current_price)
VALUES
  ("1 bed" , 79.99 , 79.99 );
INSERT INTO room_types
  (type_name, original_price, current_price)
VALUES
  ("2 beds" , 99.99 , 89.99 );
INSERT INTO room_types
  (type_name, original_price, current_price)
VALUES
  ("Doluxe" , 129.99 , 119.99 );
INSERT INTO room_types
  (type_name, original_price, current_price)
VALUES
  ("Presidential" , 229.99 , 199.99 );

create table reviews (
  id integer primary key AUTOINCREMENT,
  customer_id integer not null,
  room_type_id integer not null,
  rating number,
  comment text,
  review_date datetime,
  foreign key (room_type_id) references room_types(id),
  foreign key(customer_id) references customers(id)
);
