import styled from "styled-components"
import logo from "../../src/images/logo.png"
import { Link } from "react-router-dom"


const Header = ({ page, pageTitle }) => {
    return (
        <HeaderDiv>
            <Logo src={logo} alt="app-logo" />
            <StyldeDiv>
                <Link to={pageTitle}> {page}</Link>
            </StyldeDiv>
        </HeaderDiv>
    )
}

const StyldeDiv = styled.div`
font-family: sans-serif;
font-weight:bold;
font-size: 1.2rem;
border-radius: .4rem;
color:black;
display:flex;
align-items:center;
justify-content:center;
padding: .3rem;

a{
    color: rgba(6,86,83,100);
    text-decoration: none;
}
a:hover{
 text-decoration: underline;
}

`


const Logo = styled.img`
width: 2rem;
height: 2rem;
border-radius: 50%;
margin: .5rem .3rem;
`
const HeaderDiv = styled.div`
background-color:rgb(236,238,237);
margin:0;
padding: 0 .7rem;
box-sizing:border-box;
width:100%;
height:100%;
grid-area: header; 
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

`;

export default Header;