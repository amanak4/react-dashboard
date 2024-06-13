import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const generateData = (labels, data) => ({
  labels,
  datasets: [
    {
      label: '📈 Sales',
      data,
      fill: true,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      pointBackgroundColor: 'rgba(75, 192, 192, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
    },
  ],
});

const generateBarData = (labels, data) => ({
  labels,
  datasets: [
    {
      label: '📊 Products Sold',
      data,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
});

const Dashboard = () => {
  const [timeFrame, setTimeFrame] = useState('day');

  const dataSets = {
    day: {
      labels: ['1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM'],
      salesData: [50, 70, 40, 60, 30, 50, 100, 90, 60, 80, 70, 110],
      productData: [5, 8, 3, 7, 2, 5, 10, 9, 6, 8, 7, 11],
    },
    week: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      salesData: [300, 500, 400, 600, 700, 900, 800],
      productData: [30, 50, 40, 60, 70, 90, 80],
    },
    month: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      salesData: [1500, 2000, 1700, 2200],
      productData: [150, 200, 170, 220],
    },
    year: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      salesData: [5000, 6000, 7000, 8000, 7500, 9000, 8500, 9500, 11000, 10000, 12000, 13000],
      productData: [500, 600, 700, 800, 750, 900, 850, 950, 1100, 1000, 1200, 1300],
    },
  };

  const lineData = generateData(dataSets[timeFrame].labels, dataSets[timeFrame].salesData);
  const barData = generateBarData(dataSets[timeFrame].labels, dataSets[timeFrame].productData);
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return  (
    <div className="min-h-screen bg-gray-100 p-6 font-poppins">
      <div className="relative mb-6">
        <h1 className="text-4xl font-extrabold text-gray-800 relative z-10">
        📊 Dashboard
        </h1>
        <svg className="absolute top-0 left-0 w-12 h-12 opacity-20 z-0" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="50" fill="blue" />
        </svg>
      </div>
        <div className="mb-6 flex flex-wrap gap-4 justify-start">
        <button
          onClick={() => setTimeFrame('day')}
          className={`hover:shadow-xl font-bold transition-shadow duration-300 ease-in-out transform cursor-pointer px-4 py-2 rounded-lg ${timeFrame === 'day' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}
        >
         🌞 Day
        </button>
        <button
          onClick={() => setTimeFrame('week')}
          className={`hover:shadow-xl font-bold transition-shadow duration-300 ease-in-out transform cursor-pointer px-4 py-2 rounded-lg ml-2 ${timeFrame === 'week' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}
        >
          📅 Week
        </button>
        <button
          onClick={() => setTimeFrame('month')}
          className={`hover:shadow-xl font-bold transition-shadow duration-300 ease-in-out transform cursor-pointer px-4 py-2 rounded-lg ml-2 ${timeFrame === 'month' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}
        >
          🗓️ Month
        </button>
        <button
          onClick={() => setTimeFrame('year')}
          className={`hover:shadow-xl font-bold transition-shadow duration-300 ease-in-out transform cursor-pointer px-4 py-2 rounded-lg ml-2 ${timeFrame === 'year' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}
        >
            📆 Year
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform cursor-pointer">
            <Line data={lineData} options={options} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform cursor-pointer">
            <Bar data={barData} options={options} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 ,delay: 0.2}}
            className="bg-white p-4 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-bold mb-4">Today's Sales 📊</h2>
            <p>Our sales for today have been consistent, with peak sales occurring in the late morning and early afternoon.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-4 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-bold mb-4">Weekly Performance 📈</h2>
            <p>This week's performance shows a steady increase in sales, with a significant spike on Friday and Saturday.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white p-4 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-bold mb-4">Monthly Overview 📅</h2>
            <p>Sales have been strong this month, with the third week showing the highest performance, likely due to a promotional campaign.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
