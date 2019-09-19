import React from 'react';
import {useDataContext} from "../DataProvider/DataProvider";
import {BarChartBlock} from "../../components/BarChart";


const Main = () => {

    const {data, connected, threshold, setThreshold} = useDataContext();



    return (
        <div>
            <BarChartBlock data={data} />

        </div>
    );
};

export default Main;