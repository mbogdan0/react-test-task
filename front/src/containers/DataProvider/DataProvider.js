import React, {createContext, useContext, useState, useEffect} from 'react';
import {connect} from 'socket.io-client';
import { toast } from 'react-toastify';

const DataContext = createContext();

const DataProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [lastDataValue, setLastDataValue] = useState(null);
    const [connected, setConnected] = useState(false);
    const [threshold, setThreshold] = useState(25);

    useEffect(() => {
        const connection = connect('http://localhost:3001');
        connection.on('connect', () => setConnected(true));
        connection.on('data', (obj) => {
            setData(prev => [...prev, obj]);
            setLastDataValue(obj.value);
        });
    }, []);

    useEffect(() => {
        if (lastDataValue > threshold) {
            toast(`Value ${lastDataValue} is greater than your threshold (${threshold})`);
        }
    }, [lastDataValue, threshold]);


    const pass = {data, connected, threshold, setThreshold};

    return (
        <DataContext.Provider value={{...pass}}>
            {children}
        </DataContext.Provider>
    )
};

export const useDataContext = () => useContext(DataContext);

export default DataProvider;