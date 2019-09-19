import {Line} from 'react-chartjs-2';
import React from 'react';

const LineChart = ({labels, dataSet}) => {
    const WIDTH = 600;
    const HEIGHT = 400;

    const options = {
        legend: {
            display: false
        },
        responsive: false,
        scales: {
            xAxes: [{
                display: true

            }],
            yAxes: [{
                display: true
            }]
        }
    };

    const data = {
        labels: labels,
        datasets: [{
            data: dataSet,
            label: "Point",
            borderColor: "#3e95cd",
            fill: false
        }]
    };

    return (
        <Line
            width={WIDTH}
            height={HEIGHT}
            data={data}
            options={options}
        />
    )
};

export default LineChart;
