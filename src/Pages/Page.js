import Header from "../HeaderCompoents/Header";
import styled from "styled-components";

const Page = ({ levelImage, hiddenElements, Timer }) => {

    return (
        <>
            <Header Timer={Timer} page="Go home" pageTitle="/" />
            <Img src={levelImage} />

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