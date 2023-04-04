import styled from "styled-components"
import Header from "../HeaderCompoents/Header"

const HomePage = () => {
    return (
        <>
            <Header />
            <HomePageBody>
                <Instructions>
                    Welcome to your favorite game. Chose a level and tagg
                    the hidden elements in the picture
                </Instructions>
            </HomePageBody>
        </>
    )
}

const Instructions = styled.p`

font-size: 2rem
font-family: 'Fruktur', cursive;
color: rgba(6,86,83,100);
width: auto;
display: flex;
flew-wrap; wrap;
padding: .5rem 1rem;
height: auto;

`
const HomePageBody = styled.div`
grid-area: body;
display:flex;
flex-direction: column;
box-sizing:border-box;
max-height: 100vh;
max-width: 100vw;
align-items: center;


`
export default HomePage