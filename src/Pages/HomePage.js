import styled from "styled-components"
import Header from "../HeaderCompoents/Header"
import leveOneImage from "../images/artStationImage.jpg"
import levelTwoImage from "../images/li-decai-5-2.jpg"
import levelThreeImage from "../images/paint.png"

const levelImageWidth = 6;
const IMAGESCONTAINERHEIGHT = levelImageWidth * 3 + 4;

const HomePage = () => {
    return (
        <>
            <Header />
            <HomePageBody>
                <Instructions>
                    Welcome to your favorite game. Chose a level and tagg
                    the hidden elements in the picture
                </Instructions>
                <LevelImagesContainer>
                    <div>
                        <LevelImage src={leveOneImage} alt="level-one-image" />
                        <LevelImage src={levelTwoImage} alt="level-two-image" />
                    </div>
                    <LevelImage src={levelThreeImage} alt="level-Three-image" />

                </LevelImagesContainer>
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
const LevelImagesContainer = styled.div`
  width: clamp(10rem, 60vw, 60 rem);
  &&~div{
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content: space-between;
  }

`
const LevelImage = styled.img`
width: clamp(8rem, 30vw, 20rem) ;
height: clamp(8rem, 30vw, 20rem) ;
border-radius:50%;
&:hover{
    cursor:pointer;
}

`
const HomePageBody = styled.div`
grid-area: body;
height: 100%;
width:100%;
display:flex;
flex-direction: column;
box-sizing:border-box;
max-height: 100vh;
max-width: 100vw;
align-items: center;

`

export default HomePage