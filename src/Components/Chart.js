import React from "react";
import { FaChartLine } from "react-icons/fa";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "",
    },
  },
  elements: {
    point: {
      radius: 0, // Set point radius to 0 to hide the points
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Report",
      data: labels.map(() => Math.floor(Math.random() * 2000 - 1000)),
      borderWidth: 3,
      borderColor: "#6366f1",
      fill: "start",
      tension: 0.3,
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <div className="my-2 flex items-center justify-between">
        <div className="text-2xl font-bold mx-2">3532.00 $</div>
        <div className="text-medium border border-gray-300 p-2 px-4 rounded-full font-light text-gray-500 mx-2">
          Monthly
        </div>
      </div>
      <div className="flex items-center">
        {" "}
        <div className="p-2 bg-green-500 rounded-full">
          <FaChartLine className="text-green-200" />{" "}
        </div>
        <div className="text-gray-400 mx-1 text-base font-light"> 136</div>
      </div>
      <Line options={options} data={data} />
    </div>
  );
};
export default LineChart;
