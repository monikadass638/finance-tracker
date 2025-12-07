import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
// For Bar Chart
const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Sales",
      data: [12, 19, 8, 15, 9],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
  ],
};

// For Pie Chart
const pieData = {
  labels: ["Black", "Gray", "White"],
  datasets: [
    {
      label: "Votes",
      data: [10, 20, 30],
      backgroundColor: ["#423d3eff", "#8e9396ff", "#f1eee7ff"],
    },
  ],
};
function Chartpie() {
  return (
    <div className="container mt-5 pb-5 bg-white shadow-lg rounded">
      <h2 className="mt-5 px-2 py-3 fs-4 mb-5">Monthly Expense Breakdown</h2>
      <div className="w-25 align-self-center mx-auto">
        <Pie data={pieData} />
      </div>
    </div>
  );
}

export default Chartpie;
