import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import TransactionsStatistics from './Components/TransactionsStatistics';
import Charts from './Pages/Charts';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactionStatistics" element={<TransactionsStatistics />} />
        <Route path="/transactionsChart" element={<Charts />} />
      </Routes>
    </>
  );
};

export default App;