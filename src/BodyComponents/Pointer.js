
import styled from 'styled-components';

const PointerWrapper = styled.div`
  z-index: 99;
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
    return (
        <PointerWrapper style={{ left: position.x - 50, top: position.y - 50, cursor: 'none' }}>
            <Center />
        </PointerWrapper>
    );
};

export default Pointer;
