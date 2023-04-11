import Header from "../HeaderCompoents/Header";
import styled from "styled-components";
import FeedBack from "../BodyComponents/FeedBack";
import Pointer from "../BodyComponents/Pointer";

const Page = ({ levelImage, hiddenElements, Timer }) => {

    return (
        <>
            <Header Timer={Timer} Hiddens={hiddenElements} page="Go home" pageTitle="/" />
            <FeedBack isWin={false} />
            <Img src={levelImage}
                ref={(el) => {
                    if (el) {
                        return (<Pointer target={el} />)
                    }
                }}
            />
            <Pointer target={<Img src={levelImage} />} />

        </>
    )
}

const Img = styled.img`
max-height: 100%;
max-width: 100%;
position: relative;
grid-area: body;

`
export default Page;