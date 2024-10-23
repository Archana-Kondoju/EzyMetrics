/**
 * The `Analytics` component displays a line chart and a bar chart to visualize sample sales data.
 * The sample data for the charts is defined within the component and can be replaced with actual data from the application.
 */
import React from 'react';
/* 
 * The line chart shows the sales trend over the past 6 months, while the bar chart displays the sales by product.
 * The component uses the `react-chartjs-2` library to render the charts, and the `chart.js` library is registered with the necessary components.
 */
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [150, 200, 250, 300, 400, 450],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const barChartData = {
    labels: ['Product A', 'Product B', 'Product C'],
    datasets: [
      {
        label: 'Sales by Product',
        data: [300, 400, 250],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="mt-8 p-4">
      <h1 className="text-3xl font-semibold mb-4">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <Line data={lineChartData} />
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg">
          <Bar data={barChartData} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
