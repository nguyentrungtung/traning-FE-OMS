// ./components/LineChart.js

import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
const labels = ['19/6', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
const data = {
  labels: labels,
  datasets: [
    {
      type: 'bar',
      label: "Chi nhánh 1",
      backgroundColor: "#0E72ED",
      data: [550000],
      pointRadius: 0,
      pointStyle: 'rect',
    },
    {
      type: 'bar',
      label: "Chi nhánh 2",
      backgroundColor: "#FF9500",
      data: [150000],
      pointRadius: 0,
      pointStyle: 'rect',
    },
  ],
};

const StackedBarChart = () => {
  return (
    <div>
      <Bar data={data} options={{
        plugins: {
          legend: {
            position: 'bottom',
            align: 'start',
            labels: {
              usePointStyle: true,
              font: {
                size: 12,
              }
            },
          }
        },
        responsive: true,
        scales: {
          x:{
            offset: true,
            stacked: true,
            grid: {
              display: false,
              tickMarkLength: 15  
            },
            ticks:{
              padding: 0,
            }
          },
          y:{
            stacked: true,
            max: 800000,
            grace: 100,
            ticks:{
              color: '#D0D6E5',
              padding: 7
            },
          },
      }
      }}/>
    </div>
  );
};
export default StackedBarChart;