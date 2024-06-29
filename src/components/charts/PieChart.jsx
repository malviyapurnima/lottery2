import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  const [options] = useState({
    chart: {
      width: 300,
      type: 'pie',
    },
    labels: [],
    colors: ['#FF3131', '#116F80', '#0B3447'],
    // dataLabels: {
    //   enabled: false,
    // },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    responsive: [{
      breakpoint: 200,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  });

  const [series] = useState([20, 15, 65]);

  return (
    <div>
      <ReactApexChart options={options} series={series} type="pie" width={260} />
    </div>
  );
};

export default PieChart;