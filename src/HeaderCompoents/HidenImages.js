import styled from "styled-components"

const HiddenImages = ({ hiddenElements, className }) => {
    return (
        <div className={className}>
            {
                hiddenElements.map((element) => {
                    return (
                        <Img src={element.src} key={element.id}
                            alt={element.alt} />
                    )
                })
            }
        </div>
    )
}

const Img = styled.img`
z-index: 10;
width: 3rem;
height: 3rem;
border-radius: 30%;
&:hover{
    transform: scale(1.1)
}

@media (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
}
`

const StyledHiddenImages = styled(HiddenImages)`
box-sizing:border-box;
width:12rem;
display: flex;
flex-direction: row;
gap:1rem;
padding: .2rem .4rem;

@media (max-width: 768px) {
    width: 6rem;
    gap:.3rem;
}
`
export default StyledHiddenImages;