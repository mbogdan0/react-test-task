import React, {useState} from 'react';
import {useDataContext} from "../../containers/DataProvider/DataProvider";

const Threshold = () => {
    const {threshold, setThreshold} = useDataContext();
    const [input, setInput] = useState('');

    const handleClick = () => {
        const num = +input;
        if (isNaN(num) || num < -100 || num > 100) {
            setInput('');
            return alert('Threshold should be between -100 and 100');
        }
        setInput('');
        setThreshold(num);
    };

    return (<div className="threshold-block">
        Current threshold: <b>{threshold}</b><br />
            <input type="text" onChange={e => setInput(e.target.value)} />
            <input type="button" value="Set threshold" onClick={handleClick} />
        </div>);
};

export default Threshold;