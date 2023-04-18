import Header from "../HeaderCompoents/Header";
import styled from "styled-components";
import FeedBack from "../BodyComponents/FeedBack";
import Pointer from "../BodyComponents/Pointer";
import { useState } from "react";
import HiddenList from "../BodyComponents/HiddenList";
import HiddensPositions from "../Firebase/BackenD/HiddensPositions";
import isBoundedBy from "../GeneralFunctions/isBoundedBy";
import { useEffect } from "react";

const Page = ({ levelImage, hiddenElements, Timer, hiddenElementsArray }) => {
    const [position, setPosition] = useState({ "x": 0, "y": 0 });
    const [positionRatios, setPositionRatios] = useState({ x: 0, y: 0 });
    const [HiddenElPositions, setHiddenElPositions] = useState(HiddensPositions);
    const [isClicked, setIsClicked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [feedBack, setFeedBack] = useState(false);
    const [levelHiddens, setLevelHiddens] = useState(hiddenElementsArray);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 1500);

        return () => {
            clearTimeout(timer);
        };
    }, [isVisible]);

    const handleMouseMove = (e) => {
        if (!isClicked) {
            setPosition({ "x": e.nativeEvent.offsetX, "y": e.nativeEvent.offsetY });
        }

    }
    const handleLevelImageClick = (e) => {
        setIsClicked(!isClicked);
        setPositionRatios({ x: position.x / e.target.clientWidth, y: position.y / e.target.clientHeight })

    }

    const handleHiddenListClick = (e) => {
        const level = e.target.dataset.level ?
            e.target.dataset.level : e.target.parentNode.dataset.level;
        const title = e.target.dataset.title ?
            e.target.dataset.title : e.target.parentNode.dataset.title;
        const updatedHiddenElPosition = HiddenElPositions.filter((el) => {
            return (el.level === level);
        })
        setHiddenElPositions(() => updatedHiddenElPosition);
        if (isFound(title, positionRatios, HiddenElPositions)) {
            setFeedBack(true);

            setLevelHiddens(() => {
                const updatedLevelHiddens = levelHiddens.map((hidden) => {
                    if (hidden.title === title) {
                        return { ...hidden, isFound: true }
                    }
                    return hidden;
                });
                if ((updatedLevelHiddens.find((hidden) => hidden.isFound === false)) === undefined) {
                    setGameOver(true);
                }
                return updatedLevelHiddens;
            });
        } else {
            setFeedBack(false);
        }
        setIsVisible(true);
        setIsClicked(!isClicked);
    }

    return (
        <>
            <Header Timer={Timer} Hiddens={hiddenElements} page="Go home" pageTitle="/" />
            <FeedBack isWin={feedBack} isVisible={isVisible} />
            <Img src={levelImage} onMouseMove={handleMouseMove} onClick={handleLevelImageClick} />
            {(!isClicked) && <Pointer position={position} />}
            {(isClicked) && <HiddenList position={position} hiddenElements={levelHiddens}
                handleClick={handleHiddenListClick} />}

        </>
    )
}
const Img = styled.img`
max-height: 100%;
max-width: 100%;
position: relative;
grid-area: body;
cursor: none;
`
const isFound = (elementTitle, clickPositionRatios, HiddenRatios) => {
    let result = false;
    HiddenRatios.forEach((el) => {
        if ((el.title === elementTitle)) {
            if (isBoundedBy(clickPositionRatios.x, el.minXRatio, el.maxXRatio)
                && isBoundedBy(clickPositionRatios.y, el.minYRatio, el.maxYRatio)) {
                result = true;
            }
        }

    })
    return result;
}


export default Page;