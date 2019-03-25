const express = require("express");
const router = express.Router();

const filename = "database/database.sqlite";
const sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database(filename);
// db.run("PRAGMA foreign_keys = ON");

router.get("/customers", function(req, res) {
  var sql = "select * from customers";

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
    res.status(200).json({
      customers: rows
    });
  });
});

router.get("/customers/:id", function(req, res) {
  // TODO: add code here
  const id = req.params.id;
  var sql = `select * from customers where id = ${id}`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
    res.status(200).json({
      customers: rows
    });
  });
});

//this is for finding people with these first names
////
// router.get("/customers", function(req, res) {
//   const sql = `select * from customers where firstname in ("John", "Jacey")`;

//   db.all(sql, [], (err, rows) => {
//     if (err) {
//       console.log("ERROR fetching from the database:", err);
//       return;
//     }
//     console.log("Request succeeded, new data fetched", rows);
//     res.status(200).json({
//       customers: rows
//     });
//   });
// });

router.delete("/customers", function(req, res) {
  const sql = `delete from customers where surname like '%Dove%'`;

  db.run(sql, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
  });
  res.sendStatus(200);
});

// router.get("/customers/:surname", function(req, res) {
//   const surname = req.params.surname;
//   const sql = `select * from customers where surname like '%${surname}%'`;

//   db.all(sql, [], (err, rows) => {
//     if (err) {
//       console.log("ERROR fetching from the database:", err);
//       return;
//     }
//     console.log("Request succeeded, new data fetched", rows);
//     res.status(200).json({
//       customers: rows
//     });
//   });
// });

router.post("/customers/", function(req, res) {
  const newCustomer = req.body;
  const sql = `INSERT INTO customers (title, firstname, surname, email) VALUES ("${
    newCustomer.title
  }", "${newCustomer.firstname}", "${newCustomer.surname}", "${
    newCustomer.email
  }");`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
  });
  res.sendStatus(200);
});
////////////////////////////////////////////////////////////////////////////
router.put("/customers/:id", function(req, res) {
  const id = req.params.id;
  const newCustomer = req.body;
  let sql = `update customers set `;
  if (newCustomer.title) {
    sql += `title = "${newCustomer.title}", `;
  }
  if (newCustomer.firstname) {
    sql += `firstname = "${newCustomer.firstname}", `;
  }
  if (newCustomer.surname) {
    sql += `surname = "${newCustomer.surname}", `;
  }
  if (newCustomer.email) {
    sql += `email = "${newCustomer.email}" `;
  }
  sql += `where id = ?;`;

  db.get(sql, [id], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
  });
  res.sendStatus(200);
});

//let sql = `update customers set `;

// if (newCustomer.title)
//sql += `title = ${newCustomer.title}, `;

// get '/reservations'
// TODO: add code here

router.get("/reservations", function(req, res) {
  var sql = "select * from reservations";

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
    res.status(200).json({
      reservations: rows
    });
  });
});

// get '/reservations/:id'
// TODO: add code here

router.get("/reservations/:id", function(req, res) {
  const id = req.params.id;
  const sql = `select * from reservations where id = ${id}`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
    res.status(200).json({
      reservations: rows
    });
  });
});

// delete '/reservations/:id'
// TODO: add code here

// get '/reservations/starting-on/:startDate'
// TODO: add code here

router.get("/reservations/starting-on/:startDate", function(req, res) {
  const startDate = req.params.startDate;
  const sql = `select * from reservations where check_in_date = "${startDate}"`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
    res.status(200).json({
      reservations: rows
    });
  });
});

// get '/reservations/active-on/:date'
// TODO: add code here

router.get("/reservations/active-on/:date", function(req, res) {
  const date = req.params.date;
  const sql = `select * from reservations where check_in_date <= "${date}" and check_out_date >= "${date}"`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
    res.status(200).json({
      reservations: rows
    });
  });
});

// post '/reservations'
// TODO: add code here

router.post("/reservations", function(req, res) {
  const newRes = req.body;
  const sql = `insert into reservations (customer_id, room_id, check_in_date, check_out_date, room_price)
  VALUES (${newRes.customer_id}, ${newRes.room_id}, "${newRes.check_in_date}",
   "${newRes.check_out_date}", ${newRes.room_price})`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
  });
  res.sendStatus(200);
});

// get `/detailed-invoices'
// TODO: add code here

// get `/reservations/details-between/:from_day/:to_day`
// TODO: add code here

router.delete("/reservations/:id", function(req, res) {
  const id = req.params.id;
  const sql = `delete from reservations where id = ${id}`;

  db.run(sql, (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }

    console.log("Successfully removed reservation");
    res.status(200).json({
      message: "Successfully removed reservation"
    });
  });
});
////////////////////////////////////class3
//HOMEWORK 1
router.get("/reservations-and-invoices/", function(req, res) {
  const sql = `select *
  FROM reservations 
  JOIN invoices 
  ON invoices.reservation_id = reservations.id`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
    res.status(200).json({
      reservations: rows
    });
  });
});

///HOMEWORK 2
///////Calculate the total amount paid on invoices for the summer of 2018
// SELECT SUM(total) as totalPaid FROM invoices WHERE invoices.paid = 1 AND invoice_date_time > "2017-05-01" AND invoice_date_time < "2017-08-30";

//HOMEWORK 3
router.get("/reservations-per-customer/", function(req, res) {
  const sql = `SELECT customers.firstname, customers.surname, customers.email, COUNT(*)
AS count
FROM customers
GROUP BY surname;`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
    res.status(200).json({
      reservations: rows
    });
  });
});

///HOMEWORK 4
/////Get the number of reservations for each room ID and include the details for the room details
router.get("/reservation-per-room/", function(req, res) {
  const sql = `SELECT room_types.*,room_id, COUNT(*) 
as Counts 
FROM rooms
JOIN reservations
ON reservations.room_id = rooms.id  
JOIN room_types
ON rooms.room_type_id = room_types.id
GROUP BY room_id;`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
    res.status(200).json({
      reservations: rows
    });
  });
});

///HOMEWORK 5
///Adapt the previous query (8.c) to include the details for the type of room.
///it's adapted

///HOMEWORK 6
///Get the list of rooms with sea view that were reserved more than 2 times.

router.get("/rooms-sea-view/", function(req, res) {
  const sql = `SELECT reservations.room_id, count(*)
 as count
  FROM reservations
  JOIN rooms
  ON reservations.room_id = rooms.id
  WHERE rooms.sea_view = 1
  GROUP BY reservations.room_id
 HAVING count >= 2`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
    res.status(200).json({
      reservations: rows
    });
  });
});

///HOMEWORK 8
/// get the list of reservations between a specified time period. this should include the customer and room details.

router.get("/reservations/details-between/:from_day/:to_day", function(
  req,
  res
) {
  const fromDay = req.params.from_day;
  const toDay = req.params.to_day;
  const sql = `SELECT customers.*, rooms.*, reservations.id
  FROM reservations
  JOIN rooms
  ON reservations.room_id = rooms.id
  JOIN customers
  ON reservations.customer_id = customers.id
  WHERE check_in_date > "${fromDay}" AND check_in_date < "${toDay}"`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
    res.status(200).json({
      reservations: rows
    });
  });
});

///HOMEWORK 9
///As a staff member, I want to get the number of reservations per customer.
////Create an endpoint to get from / reservations - per - customer / the number of reservations each client has

router.get("/reservations-per-customer/", function(req, res) {
  const sql = `SELECT customer_id, COUNT(*)
  AS count
  FROM reservations
  GROUP BY customer_id`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
    res.status(200).json({
      reservations: rows
    });
  });
});

///HOMEWORK 10
////Create an endpoint to get from /stats-price-room/ the list of rooms, together with the amount the hotel has earned with each,
/// the average value earned per stay, and the number of complete stays it has had in the past.

router.get("/stats-price-room/", function(req, res) {
  const sql = `SELECT room_id, SUM(room_price) AS total, AVG(room_price) AS average, COUNT(*) AS count
  FROM reservations
  GROUP BY room_id`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
    res.status(200).json({
      reservations: rows
    });
  });
});

///HOMEWORK 11
///Create an endpoint to get from /rooms/available-in/:from_day/:to_day the list of available rooms

router.get("/rooms/available-in/:from_day/:to_day", function(req, res) {
  const fromDay = req.params.from_day;
  const toDay = req.params.to_day;
  const sql = `SELECT room_id
  FROM reservations
  GROUP BY room_id
  HAVING check_in_date < "${toDay}" AND check_out_date < "${fromDay}" OR check_in_date > "${toDay}"`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      console.log("ERROR fetching from the database:", err);
      return;
    }
    console.log("Request succeeded, new data fetched", rows);
    res.status(200).json({
      reservations: rows
    });
  });
});

module.exports = router;
