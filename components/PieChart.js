import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

function PieChart() {
  ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    backgroundColor: [
      "rgb(2,88,255)",
      "rgb(249,151,0)",
      "rgb(255,199,0)",
      "rgb(32,214,152)",
    ],
    labels: [
      "ECOMMERCE",
      "EDUCATION",
      "SAAS",
      "FINANCIAL_SERVICES",
      "PHARMACEUTICAL",
    ],
    datasets: [
      {
        labels: "My First Dataset",
        data: [300, 50, 100, 200, 70],
        backgroundColor: [
          "rgb(2,88,145)",
          "rgb(249,151,0)",
          "rgb(255,199,0)",
          "rgb(32,214,152)",
          "rgb(32,0,152)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    elements: {
      arc: {
        weight: 0.5,
      },
    },
    cutout: 130,
  };

  return (
    <div className="flex mt-10 items-center justify-center w-1/2 mx-auto">
      <Doughnut data={data} width={20} height={50} options={options} />
    </div>
  );
}

export default PieChart;
