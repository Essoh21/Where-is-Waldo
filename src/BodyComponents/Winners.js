import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getWinners from '../Firebase/getWinners';


const Container = styled.div`
box-sizing:border-box;
  position: fixed;
  margin-top:2rem;
  width:80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: ${({ isHighlighted }) => (isHighlighted ? '#F9D9D9' : 'transparent')};
`;

const Name = styled.span`
  flex: 1;
`;

const Score = styled.span`
  margin-left: 1rem;
`;

const DateAndTime = styled.span`
  margin-left: 1rem;
`;

const Winners = () => {
  const [winners, setWinners] = useState([]);
  useEffect(() => {
    const loadWinners = async () => {
      const savedWinners = await getWinners();
      setWinners(savedWinners);
    }
    loadWinners();
  }, []);

  return (
    <Container>
      <Title> Winners</Title>
      <List>
        {winners &&
          winners.map((winner, index) => (
            <ListItem key={winner.id} isHighlighted={index === 0}>
              <Name>{winner.name}</Name>
              <Score>{winner.score}</Score>
              <DateAndTime>{winner.currentDTime}</DateAndTime>
            </ListItem>
          ))}
      </List>
    </Container>
  );
};

export default Winners;