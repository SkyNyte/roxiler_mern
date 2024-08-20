// components/Table.js
import React from 'react';
import PropTypes from 'prop-types';
import './Table.css';

Table.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    sold: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};


const Table = ({ transactions, currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    onPageChange(page);
  };

  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>Sold</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.title}</td>
            <td>{transaction.description}</td>
            <td>{transaction.price}</td>
            <td>{transaction.category}</td>
            <td>{transaction.sold ? 'Yes' : 'No'}</td>
            <td><img src={transaction.image} alt={transaction.title} /></td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="7">
            <div className="pagination">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageClick(currentPage - 1)}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={currentPage === page ? 'active' : ''}
                  onClick={() => handlePageClick(page)}
                >
                  {page}
                </button>
              ))}
              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageClick(currentPage + 1)}
              >
                Next
              </button>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Table;