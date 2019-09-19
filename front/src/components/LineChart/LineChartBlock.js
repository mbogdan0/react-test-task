import React, {useState, useEffect} from 'react';
import {LineChart} from "./index";
import dayjs from 'dayjs';


export const LineChartBlock = ({data}) => {
    const [line, setLine] = useState([]);
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        const parsed = data.map(item =>
            ({
                x: dayjs(item.timestamp).format('HH:mm:ss.SSS'),
                y: item.value
            })
        );

        const allLabels = parsed.map(item => item.x);
        setLabels(allLabels);
        setLine(parsed);
    }, [data]);

    return (
        <LineChart dataSet={line} labels={labels} />
    )

};

export default LineChartBlock;