// db.js
const sqlite3 = require('sqlite3').verbose();

const DB_FILE = 'transactions.db';

const db = new sqlite3.Database(DB_FILE, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the database.');
  }
});

// Create the transactions table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS transactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  price REAL,
  category TEXT,
  sold INTEGER,
  image TEXT,
  month INTEGER NOT NULL
)`, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Transactions table created successfully.');
  }
});

// Add sample data to the transactions table
db.run(`INSERT INTO transactions (title, description, price, category, sold, image, month) VALUES 
  ('Product 1', 'Description for Product 1', 10.99, 'Category A', 1, 'image_url_1', 3),
  ('Product 2', 'Description for Product 2', 20.50, 'Category B', 0, 'image_url_2', 2),
  ('Product 3', 'Description for Product 3', 5.75, 'Category C', 1, 'image_url_3', 1),
  ('Product 4', 'Description for Product 4', 15.25, 'Category D', 1, 'image_url_4', 3),
  ('Product 5', 'Description for Product 5', 8.99, 'Category E', 0, 'image_url_5', 12),
  ('Product 6', 'Description for Product 6', 25.00, 'Category A', 1, 'image_url_6', 10),
  ('Product 7', 'Description for Product 7', 12.75, 'Category B', 0, 'image_url_7', 5),
  ('Product 8', 'Description for Product 8', 3.50, 'Category C', 1, 'image_url_8', 8),
  ('Product 9', 'Description for Product 9', 18.25, 'Category D', 1, 'image_url_9', 11),
  ('Product 10', 'Description for Product 10', 9.99, 'Category E', 0, 'image_url_10', 9)
`, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Sample data added successfully.');
  }
});

module.exports = db;