import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Data",
      data: [213, 234, 543, 943, 433, 534, 323],
      backgroundColor: ["pink", "red", "green", "yellow", "blue", "brown"],
    },
  ],
};

const Barchart = () => {
  const [state, setState] = useState(data);
  return (
    <div style={{ width: "50%", height: 300, margin: 8 }}>
      <Bar data={state} options={{ indexAxis: "y" }} />
    </div>
  );
};

export default Barchart;
