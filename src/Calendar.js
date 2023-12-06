import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Happiness and Stress",
    },
  },
};

const labels = ["11/26", "11/28", "11/30", "12/02", "12/04", "12/06", "12/08"];

const data = {
  labels,
  datasets: [
    {
      label: "Happiness",
      data: [5, 10, 15, 5],
      //   borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Stress",
      data: [4, 20, 1, 10],
      //   borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function Calendar() {
  return <Bar options={options} data={data} />;
}
