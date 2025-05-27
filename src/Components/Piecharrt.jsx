import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register ChartJS modules
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const Piecharrt = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Bookings',
        data: [500, 800, 1200, 900, 1500, 2000, 1500, 900, 1200, 800, 500, 2000],
        borderColor: '#DC2626', // changed from orange (#F97316) to red
        backgroundColor: 'rgba(220, 38, 38, 0.1)', // changed orange rgba to red rgba
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 500 },
      },
      x: {
        grid: { display: false },
      },
    },
  };

  return (
    <div className="bg-white px-20 p-5 rounded-lg shadow w-full">
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-3">Recent Activity</h2>
      </div>

      <h3 className="text-base font-semibold text-gray-800 mb-2">Monthly Bookings</h3>
      <div className="h-50 w-full">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Piecharrt;
