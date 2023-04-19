
import styled from 'styled-components';

const PointerWrapper = styled.div`
  z-index: 10;
  position: fixed;
  pointer-events: none;
  width: 6rem ;
  height: 6rem;
  border: 2px  dashed #666;
  border-radius: 50%;
  margin: -5px;
  display: flex;
  opacity: .4;
  align-items: center;
  justify-content: center;
  background-color: #000;
`;

const Center = styled.div`
z-index: 100;
 width: 3px;
 height: 3px;
 border-radius: 50%;
 background-color: red;
`;

const Pointer = ({ position }) => {
    const pointerSize = 6; // size in rem
    const pointerRadius = pointerSize / 2;
    const centerSize = 3; // size in px
    const centerRadius = centerSize / 2;
    const left = position.x - (pointerRadius);
    const top = position.y - (pointerRadius);

    return (
        <PointerWrapper style={{ left, top, cursor: 'none' }}>
            <Center style={{ marginLeft: `-${centerRadius}px`, marginTop: `-${centerRadius}px` }} />
        </PointerWrapper>
    );
};

export default Pointer;
