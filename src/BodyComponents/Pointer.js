import React, { useState, useEffect } from 'react';
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

const Pointer = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX - 50, y: e.clientY - 50 });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <PointerWrapper style={{ left: position.x, top: position.y, cursor: 'none' }}>
            <Center />
        </PointerWrapper>
    );
};

export default Pointer;
