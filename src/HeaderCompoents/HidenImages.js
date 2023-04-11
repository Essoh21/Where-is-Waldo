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
width: 3rem;
height: 3rem;
border-radius: 30%;
`

const StyledHiddenImages = styled(HiddenImages)`
width:12rem;
display: flex;
flex-direction: row;
gap:1rem;
padding: .2rem .4rem;
`
export default StyledHiddenImages;