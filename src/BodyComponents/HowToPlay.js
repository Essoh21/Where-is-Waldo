import styled from "styled-components"

const HowToPlay = ({ instructions }) => {
    return (
        <Div>
            <h3>How to play</h3>
            <P>{instructions}</P>
        </Div>
    )
}

const P = styled.p`
font-size:1.4rem;
color:#333;
@media (max-width:768px){
    font-size:1rem;
}

`
const Div = styled.div`
display:flex;
flex-direction: column;
padding:1rem 20%;
align-item: center; 
justify-content:center;
color:#333; 



`

export default HowToPlay;
