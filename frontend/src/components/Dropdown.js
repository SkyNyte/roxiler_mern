// components/Dropdown.js
import React from 'react';
import PropTypes from 'prop-types';

Dropdown.propTypes = {
  selectedMonth: PropTypes.string.isRequired, // Or any other suitable type
  onMonthChange: PropTypes.func.isRequired,
};

const Dropdown = ({ selectedMonth, onMonthChange }) => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleChange = (e) => {
    onMonthChange(e.target.value);
  };

  return (
    <select value={selectedMonth} onChange={handleChange}>
      {months.map((month) => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;