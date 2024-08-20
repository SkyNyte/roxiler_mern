// services/TransactionService.js
import axios from 'axios';

const TransactionService = {
  getTransactions: async (month, page, searchTerm) => {
    try {
      const response = await axios.get('${apiUrl}/transactions', {
        params: {
          month,
          page,
          searchTerm
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching transactions:', error);
      throw error;
    }
  }
};

export default TransactionService;