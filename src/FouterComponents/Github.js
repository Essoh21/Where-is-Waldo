import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
  border: 2px solid black;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: black;
    color: white;

    svg {
      animation: ${spin} 2s linear infinite;
    }
  }
`;

const GithubIcon = styled(FaGithub)`
  font-size: 1.5rem;
  margin-right: 0.5rem;
  transition: all 0.3s ease-in-out;
`;

const Github = ({ link, text }) => {
    return (
        <Wrapper href={link} target="_blank" rel="noopener noreferrer">
            <GithubIcon />
            {text}
        </Wrapper>
    );
};

export default Github;
