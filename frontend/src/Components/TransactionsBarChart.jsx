import { useState } from "react";
import { Button, Input, Box, Heading } from "@chakra-ui/react";

const TransactionsBarChart = () => {
  const [month, setMonth] = useState("");
  const [priceRanges, setPriceRanges] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://easy-pear-walkingstick-wrap.cyclic.app/api/bar-chart?month=${month}`
      );
      const data = await response.json();
      setPriceRanges(data.priceRanges);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <Box border="1px solid teal" mb="50px" p="50px">
      <Heading textAlign="center">Bar Chart</Heading>
      <form onSubmit={handleSubmit}>
        <Box display="flex" alignItems="center" w="70%" m="auto">
          <Input
            type="text"
            value={month}
            onChange={handleMonthChange}
            placeholder="Type month number"
          />

          <Button type="submit">Generate Bar Chart</Button>
        </Box>
      </form>

      {priceRanges.length > 0 && (
        <Box textAlign="center" mb="30px">
          <h2>Price Ranges</h2>
          <ul>
            {priceRanges.map((range) => (
              <li key={range.range}>
                {range.range}: {range.count}
              </li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default TransactionsBarChart;

// import { useState, useEffect } from "react";
// import { Bar } from "react-chartjs-2";
// import { Chart } from "chart.js";

// Chart.register(
//   Chart.controllers.bar,
//   Chart.scaleService.getScaleConstructor("category")
// );

// const TransactionsBarChart = () => {
//   const [month, setMonth] = useState("1");
//   const [priceRanges, setPriceRanges] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:8000/api/bar-chart?month=${month}`
//       );
//       const data = await response.json();
//       setPriceRanges(data.priceRanges);
//     } catch (error) {
//       console.error("Failed to fetch data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []); // Fetch data on component mount

//   const handleMonthChange = (event) => {
//     setMonth(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetchData();
//   };

//   const chartData = {
//     labels: priceRanges.map((range) => range.range),
//     datasets: [
//       {
//         label: "Count",
//         data: priceRanges.map((range) => range.count),
//         backgroundColor: "rgba(75, 192, 192, 0.6)",
//       },
//     ],
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Month:
//           <input type="text" value={month} onChange={handleMonthChange} />
//         </label>
//         <button type="submit">Generate Bar Chart</button>
//       </form>

//       {priceRanges.length > 0 && (
//         <div>
//           <h2>Price Ranges</h2>
//           <Bar data={chartData} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default TransactionsBarChart;
