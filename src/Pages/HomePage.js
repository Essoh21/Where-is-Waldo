import styled from "styled-components"
import Header from "../HeaderCompoents/Header"
import leveOneImage from "../images/artStationImage.jpg"
import levelTwoImage from "../images/li-decai-5-2.jpg"
import levelThreeImage from "../images/paint.png";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <Header page="Scores" pageTitle="Scores" />
            <HomePageBody>
                <Instructions>
                    Welcome to your favorite game. Chose a level and tagg
                    the hidden elements in the picture
                </Instructions>
                <LevelImagesContainer>
                    <div className="levelOneAndTwo">
                        <StyledLevelContent
                            link="/levelOne"
                            title="Level one "
                            imgsrc={leveOneImage} imgalt="level-one-image" />
                        <StyledLevelContent
                            link="/levelTwo"
                            title="Level two "
                            imgsrc={levelTwoImage} imgalt="level-two-image" />
                    </div>
                    <div className="thirdLevel">
                        <StyledLevelContent
                            link="/levelThree"
                            title="Level Three"
                            imgsrc={levelThreeImage} imgalt="level-three-image" />
                    </div>

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
const LevelContent = ({ title, imgsrc, imgalt, className, link }) => {
    return (
        <Link to={link} className={className}>
            <LevelTitle>
                {title}
            </LevelTitle>
            <LevelImage src={imgsrc} alt={imgalt} />
        </Link>
    )
}

const StyledLevelContent = styled(LevelContent)`
  text-decoration: none;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     & :hover{
        transform: scale(1.05);
     }
`;
const LevelImagesContainer = styled.div`
  width: clamp(10rem, 60vw, 60rem);
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  & .levelOneAndTwo{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
 }
`;

const LevelTitle = styled.h3`

font-weight:bold;
font-family: sans serif;
color: rgba(6,86,83,100);
fonst-size:1.4rem

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