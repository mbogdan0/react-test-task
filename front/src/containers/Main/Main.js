import React from 'react';
import {useDataContext} from "../DataProvider/DataProvider";
import {BarChartBlock} from "../../components/BarChart";
import LineChartBlock from "../../components/LineChart/LineChartBlock";
import Threshold from "../../components/Threshold/Threshold";


const Main = () => {

    const {data} = useDataContext();



    return (
        <>
            <Threshold />

            <div className='main-chart-block'>
                <BarChartBlock data={data} />
            </div>
            <div className='main-chart-block'>
                <LineChartBlock data={data} />
            </div>

        </>
    );
};

export default Main;