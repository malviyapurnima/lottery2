import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const RadialBarChart = ({ totalUsers }) => {

  const [options] = useState({
    chart: {
      height: 350,
      type: 'radialBar',
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -30,
        endAngle: 340,
        hollow: {
          margin: 0,
          size: '70%',
          background: '#FFFFFF',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: '#D9D9D9',
          strokeWidth: '100px',
          margin: 0,
          // dropShadow: {
          //   enabled: true,
          //   top: -3,
          //   left: 0,
          //   blur: 4,
          //   opacity: 0.35,
          // },
        },
        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: 'black',
            fontSize: '17px',
          },
          value: {
            formatter: function (val) {
              return totalUsers;
            },
            color: 'black',
            fontSize: '30px',
            show: true,
          },
        },
      },
    },
    fill: {
      colors: ['#FF914D'],
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0,
        gradientToColors: ['#FF3131'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
        colorStops: []
      },
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Users'],
  });

  const [series] = useState([75]);

  return (
    <div>
      <ReactApexChart options={options} series={series} type="radialBar" height={220} />
    </div>
  );
};

export default RadialBarChart;