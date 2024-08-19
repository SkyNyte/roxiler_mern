const express = require("express");
require("dotenv").config();
const connectToMongo = require("./config/database");
const router = require("./routes/transactionsRoutes"); // Corrected the path
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

// Set default port to 3000 if PORT is undefined
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.use("/api", router);

// Ensure the database connection is properly initialized before starting the server
app.listen(port, async () => {
  try {
    await connectToMongo(); // Invoke the function to connect to MongoDB
    console.log("Connected To MongoDB");
  } catch (error) {
    console.log("Failed to connect to MongoDB:", error.message);
  }
  console.log('Listening on port 3000');
});