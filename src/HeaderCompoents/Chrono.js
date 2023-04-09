
import styled from 'styled-components';

import React, { useState, useEffect } from 'react';

const Chrono = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 10);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning]);

    const formatTime = (timeInMilliseconds) => {
        const NUMBER_OF_TENMILLISEC_IN_A_MIN = 6000
        const min = Math.floor(timeInMilliseconds / NUMBER_OF_TENMILLISEC_IN_A_MIN);
        const sec = Math.floor((timeInMilliseconds % NUMBER_OF_TENMILLISEC_IN_A_MIN) / 100);
        const ms = timeInMilliseconds % 100;
        return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
    };

    return (
        <div>
            <Div>{formatTime(time)}</Div>
        </div>
    );
};


const Div = styled.div`
font-weight: bold;
font-family: sans-serif;
font-size: 1.5rem;
color: #333;
`

export default Chrono;
