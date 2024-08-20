// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table.js';
import Charts from './components/Charts.js';
import Dropdown from './components/Dropdown.js';
import TransactionService from './services/TransactionService.js';
import PropTypes from 'prop-types';

Table.propTypes = {
  transactions: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

function App() {
  const [transactions, setTransactions] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('March');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await TransactionService.getTransactions(selectedMonth, currentPage, searchTerm);
        setTransactions(response.data);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchData();
  }, [selectedMonth, currentPage, searchTerm]);

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    setCurrentPage(1);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <h1>Transaction Dashboard</h1>
      <Dropdown
        selectedMonth={selectedMonth}
        onMonthChange={handleMonthChange}
      />
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Table
        transactions={transactions}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Charts transactions={transactions} />
    </div>
  );
}
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await TransactionService.getTransactions(selectedMonth, currentPage, searchTerm);
      console.log('Fetched Data:', response);  // Debug log
      setTransactions(response.data);
      setTotalPages(response.totalPages);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  fetchData();
}, [selectedMonth, currentPage, searchTerm]);

console.log('Current Transactions:', transactions);  // Debug log

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
    </div>
  );
}

export default App;