import styled from "styled-components"
import logo from "../../src/images/logo.png"
import { useNavigate } from "react-router-dom";
import CustomMouseContext from "../Context/CustomMouseContext";
import { useContext } from "react";



const Header = ({ page, pageLink, Timer, Hiddens }) => {
    const { handleRemoveCmouse } = useContext(CustomMouseContext);
    const navigation = useNavigate();
    const handleClick = () => {
        navigation(`${pageLink}`);
    }
    return (
        <HeaderDiv onMouseOver={handleRemoveCmouse}>
            <Logo src={logo} alt="app-logo" />
            {Timer}
            {Hiddens}

            <Button onClick={handleClick} className="notranslate"> {page}</Button>

        </HeaderDiv>
    )
}

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

@media (max-width: 768px) {
    font-size:.7rem;
    padding:5px 8px;
}

`


const Logo = styled.img`
width: 2rem;
height: 2rem;
border-radius: 50%;
margin: .5rem .3rem;

@media (max-width: 768px) {
    width:1.5rem;
    height:1.5rem;
}
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