"use client";

import { OrderFromDB } from "@/utils/interfaces";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { colors } from "@/utils/constants";
import { getMonthlySales } from "@/utils";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Legend);
export default function SalesChart({ orders }: { orders: OrderFromDB[] }) {
  const monthlySales = getMonthlySales(orders) || {};
  const chartData = {
    labels: Object.keys(monthlySales),
    datasets: [
      {
        label: "Ventas por mes",
        data: Object.values(monthlySales),
        backgroundColor: colors.softBlue,
        borderColor: colors.blue,
        borderWidth: 2,
      },
    ],
  };

  return (
    <div id="chart">
      <Bar data={chartData} />
    </div>
  );
}
