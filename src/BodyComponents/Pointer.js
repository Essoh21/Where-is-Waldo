
import styled from 'styled-components';
import useMousemove from '../customHooks/useMousemove';

const PointerWrapper = styled.div`
  z-index: 10;
  position: fixed;
  top:0;
  left:0;
  pointer-events: none;
  width: 40px ;
  height: 40px;
  border: 2px  dashed #666;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  opacity: .4;
  background-color: #000;
`;

const Center = styled.div`
z-index: 10;
 width: 3px;
 height: 3px;
 position:fixed;
 top:50%;
 left:50%;
 transform: translate(-50%, -50%);
 border-radius: 100%;
 background-color: red;
 pointer-events: none;
`;

const Pointer = () => {
    const { x, y } = useMousemove();
    return (
        <PointerWrapper style={{ left: `${x}px`, top: `${y}px`, cursor: 'none' }}>
            <Center />
        </PointerWrapper>
    );
};

export default Pointer;
