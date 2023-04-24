
import styled from 'styled-components';

const Chrono = ({ time }) => {
    const formatTime = (timeInMilliseconds) => {
        const NUMBER_OF_TENMILLISEC_IN_A_MIN = 6000;
        const min = Math.floor(timeInMilliseconds / NUMBER_OF_TENMILLISEC_IN_A_MIN);
        const sec = Math.floor((timeInMilliseconds % NUMBER_OF_TENMILLISEC_IN_A_MIN) / 100);
        const ms = timeInMilliseconds % 100;
        return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
    };

    return (
        <Div>{formatTime(time)}</Div>
    );
};


const Div = styled.div`
font-weight: bold;
font-family: sans-serif;
font-size: 1.5rem;
color: #333;

@media (max-width: 768px) {
    font-size: 1rem;
}
`

export default Chrono;
