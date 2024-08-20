// routes/transactions.js

const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// Get all transactions
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get transactions by month
router.get('/month/:month', async (req, res) => {
  const month = req.params.month;
  try {
    const transactions = await Transaction.find({
      date: {
        $gte: new Date(new Date().getFullYear(), month - 1, 1),
        $lt: new Date(new Date().getFullYear(), month, 1),
      },
    });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get transactions by search query
router.get('/search/:query', async (req, res) => {
  const query = req.params.query;
  try {
    const transactions = await Transaction.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
        { price: { $regex: query, $options: 'i' } },
      ],
    });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new transaction
router.post('/', async (req, res) => {
  const transaction = new Transaction(req.body);
  try {
    const newTransaction = await transaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a transaction
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(id, req.body);
    res.json(updatedTransaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a transaction
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTransaction = await Transaction.findByIdAndDelete(id);
    res.json(deletedTransaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;