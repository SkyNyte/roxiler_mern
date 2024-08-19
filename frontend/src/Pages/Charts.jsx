import { Box } from "@chakra-ui/react";
import TransactionsBarChart from "../Components/TransactionsBarChart";
import TransactionsPieChart from "../Components/TransactionsPieChart";

const Charts = () => {
  return (
    <>
      <Box mb="20px">
        <TransactionsBarChart />
      </Box>

      <Box>
        <TransactionsPieChart />
      </Box>
    </>
  );
};

export default Charts;
