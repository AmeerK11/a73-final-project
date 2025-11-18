import React, { useEffect, useState } from "react";
import { getChartData } from "../api";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Summary = () => {
  const [chartData, setChartData] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getChartData("research_awards", token);
        setChartData({
          labels: data.map(d => d.label),
          datasets: [
            {
              label: "Research Awards by Category",
              data: data.map(d => d.value),
              backgroundColor: "rgba(75,192,192,0.6)"
            }
          ]
        });
      } catch (err) {
        console.error("Error fetching chart data:", err);
      }
    };
    fetchData();
  }, [token]);

  if (!chartData) return <p>Loading chart...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Summary</h2>
      <Bar data={chartData} />
      <p>This bar chart shows the number of research awards by category at UNC Charlotte this month. Data source: <a href="https://inside.charlotte.edu/2025/10/30/hundreds-celebrate-unc-charlottes-research-excellence/" target="_blank" rel="noopener noreferrer">Inside UNC Charlotte</a>.</p>
    </div>
  );
};

export default Summary;
