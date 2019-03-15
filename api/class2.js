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

module.exports = router;
