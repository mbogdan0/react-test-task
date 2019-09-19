import React from 'react';
import {useDataContext} from "../DataProvider/DataProvider";



const Main = () => {

    const {data, connected, threshold, setThreshold} = useDataContext();

    return (
        <div>{JSON.stringify(data)}</div>
    );
};

export default Main;