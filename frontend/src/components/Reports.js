import React, { useEffect, useState } from "react";
import { getChartData } from "../api";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Reports = () => {
  const [chartData, setChartData] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getChartData("research_funding", token);
        setChartData({
          labels: data.map(d => d.label),
          datasets: [
            {
              label: "Research Funding Distribution ($K)",
              data: data.map(d => d.value),
              backgroundColor: ["#FF6384","#36A2EB","#FFCE56","#8A2BE2"]
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
      <h2>Reports</h2>
      <Pie data={chartData} />
      <p>This pie chart shows the distribution of research funding sources at UNC Charlotte this month. Data source: <a href="https://inside.charlotte.edu/2025/10/30/hundreds-celebrate-unc-charlottes-research-excellence/" target="_blank" rel="noopener noreferrer">Inside UNC Charlotte</a>.</p>
    </div>
  );
};

export default Reports;
