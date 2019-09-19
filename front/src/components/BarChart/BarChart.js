import {Bar} from 'react-chartjs-2';
import React from 'react';

const BarChart = ({labels, dataSet}) => {
    const WIDTH = 500;
    const HEIGHT = 350;

    const options = {
        legend: {
            display: false
        },
        responsive: false,
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true,
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    const data = {
        labels,
        datasets: [
            {
                label: '',
                data: dataSet,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                ],
            }
        ]
    };

    return (
        <Bar
            data={data}
            width={WIDTH}
            height={HEIGHT}
            options={options}
        />
    );
};

export default BarChart;