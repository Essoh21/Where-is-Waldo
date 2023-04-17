
import styled from 'styled-components';

const FeedbackContainer = styled.div`
  position: absolute;
  z-index: 100;
  top: 3rem;
  left: 50%;
  color: ${({ isWin }) => (isWin ? 'white' : 'black')};
  background-color: ${({ isWin }) => (isWin ? 'green' : 'red')};
  padding: 10px;
  border-radius: 5px;
  text-align: center;
`;

const FeedbackText = styled.p`
  margin: 0;
`;
const FeedBack = ({ isWin, isVisible }) => {

    return isVisible ? (
        <FeedbackContainer isWin={isWin}>
            {isWin ? <FeedbackText>You won!</FeedbackText> : <FeedbackText>Keep trying</FeedbackText>}
        </FeedbackContainer>
    ) : null;
};

export default FeedBack;
