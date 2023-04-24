import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
//import getWinners from '../Firebase/getWinners';
import getLevelWinners from '../Firebase/getLevelWinners';
import formatTime from '../Fonctions/formatTime';


const Container = styled.div`
  grid-area: body;
  box-sizing: border-box;
  margin: 2rem auto;
  width: 100%;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 800px;
`;

const Title = styled.h2`
  margin-top: 0;
  font-weight: bold;
  color: #555;
`;

const THead = styled.thead`
  background-color: rgb(236,238,237);
`;

const TBody = styled.tbody`
  max-height: 300px; 
  overflow-y: auto;
`;

const TR = styled.tr`
  &:nth-child(even) {
    background-color: #e9e9e9;
  }
`;

const TH = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: bold;
  color: #555;
  background-color: rgb(236,238,237);
`;

const TD = styled.td`
  padding: 1rem;
  text-align: left;
  color: #333;
`;

const Winners = ({ gameLevel }) => {
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    const loadWinners = async () => {
      const savedWinners = await getLevelWinners(gameLevel);
      setWinners(savedWinners);
    }
    loadWinners();
  }, [gameLevel]);

  return (
    <Container>
      <Title>Level {gameLevel} Winners</Title>
      <Table>
        <THead>
          <TR>
            <TH>Rank</TH>
            <TH>Player Name</TH>
            <TH>Time</TH>
            <TH>Date</TH>
          </TR>
        </THead>
        <TBody>
          {winners.map((winner, index) => (
            <TR key={winner.id}>
              <TD>{index + 1}</TD>
              <TD style={{ fontWeight: "bold" }}>{winner.name}</TD>
              <TD>{formatTime(Number(winner.score))}</TD>
              <TD>{winner.currentDTime}</TD>
            </TR>
          ))}
        </TBody>
      </Table>
    </Container>
  );
};

export default Winners;

