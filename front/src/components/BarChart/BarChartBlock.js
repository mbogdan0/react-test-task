import React, {useState, useEffect} from 'react';
import {BarChart} from "./index";



export const BarChartBlock = ({data}) => {

    const labels = ['Less -33.3', 'From -33.3 to 33.3', 'From 33.3'];
    const [bars, setBars] = useState([0, 0, 0]);

    useEffect(() => {
        const out = data.reduce((all, current) => {
            const val = current.value;
            if (val < -33.3) {
                all[0]++;
            } else if (val < 33.3) {
                all[1]++;
            } else {
                all[2]++;
            }
            return all;
        }, [0, 0, 0]);
        setBars(out);
    }, [data]);

    return (
        <BarChart dataSet={bars} labels={labels} />
    )

};

export default BarChartBlock;