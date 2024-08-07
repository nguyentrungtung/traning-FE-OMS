// ./components/LineChart.js

import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
const labels = ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Chi nhánh 1",
      backgroundColor: "#0E72ED",
      borderColor: "#0E72ED",
      data: [69, 0, 0, 0, 10, 20, 25, 65, 85, 95, 160, 190, 95, 70, 80, 75, 150, 100, 15, 0, 25, 100, 100, 25, 0],
      lineTension: 0.4,
      pointRadius: 0,
      pointStyle: 'rect',
    },
    {
      label: "Chi nhánh 2",
      backgroundColor: "#FF538A",
      borderColor: "#FF538A",
      data: [, 9, 10, 10, 21, 34, 41, 83, 100, 132, 195, 190, 140, 145, 180, 160, 180, 50, 100, 75, 15, 0],
      lineTension: 0.4,
      pointRadius: 0,
      pointStyle: 'rect',
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} options={{
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
        scales: {
          y:{
            ticks:{
              color: '#D0D6E5'
            }
          },
          x:{
            ticks:{
              color: '#D0D6E5'
            },
            grid: {
              display: false,
            }
          }
      }
      }}/>
    </div>
  );
};
export default LineChart;