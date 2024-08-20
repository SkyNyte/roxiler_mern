// controllers/transactionController.js

const Transaction = require('../models/Transaction');

const transactionController = {
  getAllTransactions: async (req, res) => {
    try {
      const transactions = await Transaction.find();
      res.json(transactions);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getTransactionsByMonth: async (req, res) => {
    const month = parseInt(req.params.month);
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
  },

  getTransactionsBySearch: async (req, res) => {
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
  },

  createTransaction: async (req, res) => {
    const transaction = new Transaction(req.body);
    try {
      const newTransaction = await transaction.save();
      res.status(201).json(newTransaction);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  updateTransaction: async (req, res) => {
    const id = req.params.id;
    try {
      const updatedTransaction = await Transaction.findByIdAndUpdate(id, req.body);
      res.json(updatedTransaction);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  deleteTransaction: async (req, res) => {
    const id = req.params.id;
    try {
      const deletedTransaction = await Transaction.findByIdAndDelete(id);
      res.json(deletedTransaction);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

module.exports = transactionController;