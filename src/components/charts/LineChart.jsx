import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { CategoryScale, LinearScale, LineController, LineElement, Title,PointElement } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, LineController, LineElement,PointElement, Title);
import { Line } from 'react-chartjs-2';

const LineChart = () => {
 
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [
          {
            label: 'Sales',
            data: [20, 40, 50, 45, 60, 80,75,100,90,85,80,90],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }
        ]
      };
    
      const options = {
        plugins: {
            legend: {
                display: false, // Hide dataset label
            },
        },
        scales: {
            x: {
                grid: {
                    color: 'rgba(0, 0, 0, 0.051)', // Change x-axis grid line color
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.051)', // Change x-axis grid line color
                },
                ticks: {
                    stepSize: 20, // Set the desired step size between ticks
                    callback: (value) => `${value}`, // Format the tick value as desired
                },
            },
        },
        
    };
    return (
        <Line  data={data} options={options} />
    )
}

export default LineChart