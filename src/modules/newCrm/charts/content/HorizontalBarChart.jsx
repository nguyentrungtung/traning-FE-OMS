// ./components/HorizontalBarChart.js

import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

// Hàm chia nhãn thành các chuỗi nhỏ hơn theo yêu cầu
import { format } from "date-fns";

function splitLabel(label, maxWidth1 = 200, maxWidth2 = 190) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = `12px Arial`;
  
    function getTextWidth(text) {
      return context.measureText(text).width;
    }
  
    var lines = [];
    var remainingText = label;
  
    // Nếu nhãn đã đủ ngắn, không cần format
    if (getTextWidth(label) <= maxWidth1) {
      return [label];
    }
  
    var part1 = '';
    var part2 = '';
    // Tạo đoạn đầu tiên có độ dài tối đa maxWidth1, cắt tại dấu cách
    while (remainingText.length > 0 && getTextWidth(part1) <= maxWidth1) {
      part1 += remainingText[0];
      remainingText = remainingText.slice(1);
    }
    // Lùi lại để đảm bảo không vượt quá maxWidth1
    while(part1[part1.length - 1] !== ' '){
        part1 = part1.substring(0, part1.length-1)
    }
    if(part1[part1.length-1] == ' '){
      part1 = part1.substring(0, part1.length-1)
    }
    lines.push(part1);
    part2 = label.slice(part1.length)
    if(getTextWidth(part2) < maxWidth2){
        lines.push(part2);
        return lines;
    }
    if(part2[0] == ' '){
        part2 = part2.substring(1)
    }
    remainingText = part2;
    part2 = ''
    while (remainingText.length > 0 && getTextWidth(part2) <= maxWidth2) {
      part2 += remainingText[0];
      remainingText = remainingText.slice(1);
    }
    // Lùi lại để đảm bảo không vượt quá maxWidth1
    while(part2[part2.length - 1] !== ' '){
        part2 = part2.substring(0, part2.length-1)
    }
    part2 += '...'
    lines.push(part2)
  
    return lines;
}
  
function formatLabels(labels) {
    return labels.map(label => splitLabel(label));
}


// Danh sách nhãn và dữ liệu
const labels = [
    "Thạch rau câu Zai Zai dài Đức Hạnh (Kg)",
    "Thạch Caramen Zai Zai Đức Hạnh (Kg)",
    "Bánh Bông Lan Ăn Sáng C'est Bon Sợi Thịt Gà Nhân Kem Phô Mai (Gói 5 cái)",
    "Socola Sữa M&M'S gói 40g/37g",
    "Snack khoai tây Lay's vị khoai tây tự nhiên Classic 95g",
    'Kẹo bơm PLaymore bong bóng 100g',
    'Bánh cuộn kem sữa chua việt quất Tipo 180g',
    'Bánh Que DoaKbua vị Tomyum stick biscuit gói 62g',
    'Bánh Que DoaKbua vị Tomyum stick biscuit gói 100g',
    'Bánh Que DoaKbua vị Tomyum stick biscuit gói 200g'
];

// Xử lý nhãn
const formattedLabels = formatLabels(labels);

// Dữ liệu biểu đồ
const data = {
  labels: formattedLabels, // Giữ nguyên cấu trúc nhãn
  datasets: [
    {
      type: 'bar',
      label: "Chi nhánh 1",
      backgroundColor: "#0E72ED",
      data: [550000, 150000, 200000, 100000, 300000, 250000, 180000, 220000, 140000, 120000],
      pointRadius: 0,
      pointStyle: 'rect',
    },
  ],
};

// Component biểu đồ
const HorizontalBarChart = () => {
  return (
    <div>
      <Bar 
        data={data} 
        options={{
          indexAxis: 'y',
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                title: function(tooltipItem) {
                  // Hiển thị toàn bộ nhãn khi hover
                  return labels[tooltipItem[0].dataIndex];
                }
              }
            }
          },
          responsive: true,
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                padding: 0,
                color: '#D0D6E5',
              }
            },
            y: {
              grace: 100,
              ticks: {
                padding: 7,
              },
            },
          }
        }}
      />
    </div>
  );
};

export default HorizontalBarChart;
