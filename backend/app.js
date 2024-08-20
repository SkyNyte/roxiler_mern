// app.js
const express = require('express');
const db = require('./config/db');

const app = express();
const port = 5173;

app.get('/transactions', (req, res) => {
  const month = parseInt(req.query.month) || 3; // Default to March
  const search = req.query.search || '';

  let sql = 'SELECT * FROM transactions WHERE month = ${month}';

  if (search) {
    sql += ` AND (title LIKE '%${search}%' OR description LIKE '%${search}%' OR price LIKE '%${search}%')`;
  }

  db.all(sql, (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Error retrieving transactions');
    } else {
      res.json(rows);
    }
  });
});

app.listen(port, () => {
  console.log('Server listening at http://localhost:${port}');
});