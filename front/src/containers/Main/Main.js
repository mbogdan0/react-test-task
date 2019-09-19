import React from 'react';
import {useDataContext} from "../DataProvider/DataProvider";
import {BarChartBlock} from "../../components/BarChart";
import LineChartBlock from "../../components/LineChart/LineChartBlock";


const Main = () => {

    const {data, connected, threshold, setThreshold} = useDataContext();



    return (
        <div>
            Socket is connected: {JSON.stringify(connected)}
            <div className='main-chart-block'>
                <BarChartBlock data={data} />
            </div>
            <div className='main-chart-block'>
                <LineChartBlock data={data} />
            </div>



        </div>
    );
};

export default Main;