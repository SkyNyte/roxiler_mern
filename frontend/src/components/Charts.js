// components/Charts.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import PropTypes from 'prop-types';

Charts.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};

const Charts = ({ transactions }) => {
  const data = transactions.map((transaction) => ({
    month: new Date(transaction.date).toLocaleString('default', { month: 'long' }),
    price: transaction.price
  }));

  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <CartesianGrid stroke="#f5f5f5" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default Charts;