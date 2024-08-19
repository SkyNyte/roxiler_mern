import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box
        p="12px"
        shadow="lg"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Link to="/">
            <Text fontWeight="bold" fontSize="25px" cursor="pointer">
              Transaction Dashboard
            </Text>
          </Link>
        </Box>
        <Box display="flex" gap="50px" fontWeight="bold" fontSize="22px">
          <Link to="/transactionStatistics">
            <Text cursor="pointer">Statistics</Text>
          </Link>
          <Link to="/transactionsChart">
            <Text cursor="pointer">Charts</Text>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
