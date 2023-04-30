import styled from "styled-components"
import Header from "../HeaderCompoents/Header"
import levelOneImage from "../images/artStationImage.jpg"
import levelTwoImage from "../images/li-decai-5-2.jpg"
import levelThreeImage from "../images/bobogai.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import HowToPlay from "../BodyComponents/HowToPlay";

const HomePage = () => {

    const [seeHowToPlay, setSeeHowToPlay] = useState(true);
    return (
        <>
            <Header page="See scores" pageLink="/Scores" />
            <HomePageBody>
                <Instructions>
                    Welcome to your favorite game. Chose a level and tagg
                    the hidden elements in the picture
                </Instructions>
                <StyledButton see={!seeHowToPlay} handleClick={() => setSeeHowToPlay(!seeHowToPlay)} className="notranslate" />
                {(!seeHowToPlay && <HowToPlay instructions={instructions} />)}
                {
                    seeHowToPlay && <LevelImagesContainer>
                        <div className="levelOneAndTwo">
                            <StyledLevelContent
                                link="/levelOne"
                                title="Level one "
                                imgsrc={levelOneImage} imgalt="level-one-image" />
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
                }
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
width: clamp(6rem, 30vw, 20rem) ;
height: clamp(6rem, 30vw, 20rem) ;
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
align-items: center;

`
const Button = styled.button`
background-color: #007bff;
color: #fff;
font-size: 16px;
padding: 10px 20px;
border: none;
border-radius: 5px;
cursor: pointer;
&:hover {
  background-color: #0069d9;
}
`;

const instructions = `This is a game that exercises your memory skills.
 There are three black and white images at the top that are part of the larger image in the game.
  The objective is to identify these images as quickly as possible. There is a timer to track the time taken.
   To identify the image, you need to click on that part of the larger image and then select the image from the list that appears.
    The game will tell you whether the image is correctly identified or not.

Once you correctly identify all three images,
 the game asks for your name to display your time among others who have played the game worldwide.
  You can then move on to the next level or replay the same level to improve your time and ranking.`

const StyledButton = ({ see, handleClick }) => {
    const label = !see ? 'How to Play' : 'Go Back';
    return <Button onClick={handleClick}>{label}</Button>;
}

export default HomePage